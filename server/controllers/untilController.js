const mongoose = require('mongoose');
const Quiz = require('../modules/quizModule');
const User = require('../modules/userModule');

const getAllQuizzes = async (req, res) => {
  try {
    
    const quizzes = await Quiz.find({}, '_id name numQus user_id');

    
    const quizzesWithUsername = await Promise.all(quizzes.map(async (quiz) => {
      
      const user = await User.findById(quiz.user_id);
     
      const username = user ? user.username : null;

     
      return {
        id: quiz._id,     
        name: quiz.name,
        numQus: quiz.numQus,
        username: username
      };
    }));

    
    res.status(200).json(quizzesWithUsername);
  } catch (error) {
   
    res.status(500).json({ message: error.message });
  }
};

const checkQuizAnswers = async (req, res) => {
  try {
    const quizId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      return res.status(400).json({ message: 'Invalid Quiz ID' });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    const { answers } = req.body; 
    
    if (!Array.isArray(answers) || answers.length !== quiz.numQus) {
      return res.status(400).json({ message: 'Invalid number of answers provided' });
    }

    let correctAnswersCount = 0;

    for (let i = 0; i < answers.length; i++) {
      const userAnswer = answers[i];
      const question = quiz.qus[i];
      if (userAnswer < 0 || userAnswer >= question.qu.length) {
        return res.status(400).json({
          message: `Invalid answer for question ${i + 1}. Answer should be between 0 and ${question.qu.length - 1}.`
        });
      }
      if (question.corQu === userAnswer) {
        correctAnswersCount++;
      }
    }

    res.status(200).json({
      correctAnswers: correctAnswersCount,
      totalQuestions: quiz.numQus
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllQuizzes,
  checkQuizAnswers,
};
