const mongoose = require('mongoose');
const Quiz = require('../modules/quizModule');


const addQuiz = async (req, res) => {
  try {
    const user_id = req.user._id;
    const { name, qus } = req.body;
    const numQus = qus.length;

    for (let i = 0; i < qus.length; i++) {
      if (qus[i].corQu >= qus[i].qu.length) {
        return res.status(400).json({
          message: `Invalid corQu for question ${i + 1}. corQu should be less than the length of the qu array.`
        });
      }
    }

    const newQuiz = new Quiz({
      user_id,
      name,
      numQus,
      qus,
    });

    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getQuizById = async (req, res) => {
  try {
    const quizId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      return res.status(400).json({ message: 'Invalid Quiz ID' });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      return res.status(400).json({ message: 'Invalid Quiz ID' });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    if (quiz.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'User not authorized to update this quiz' });
    }

    const { name, qus } = req.body;
    if (name) quiz.name = name;
    if (qus) {
      quiz.qus = qus;
      quiz.numQus = qus.length;
    

      for (let i = 0; i < qus.length; i++) {
        if (qus[i].corQu >= qus[i].qu.length) {
          return res.status(400).json({
            message: `Invalid corQu for question ${i + 1}. corQu should be less than the length of the qu array.`
          });
        }
      }
    }

    const updatedQuiz = await quiz.save();
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      return res.status(400).json({ message: 'Invalid Quiz ID' });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    if (quiz.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'User not authorized to delete this quiz' });
    }

    await Quiz.findByIdAndDelete(quizId);
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addQuiz,
  getQuizById,
  updateQuiz,
  deleteQuiz
};

