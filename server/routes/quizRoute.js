const express = require("express");
const { getAllQuizzes, checkQuizAnswers } = require('../controllers/untilController');
const { addQuiz, getQuizById, updateQuiz, deleteQuiz } = require("../controllers/quizController");
const authRequire = require('../middleware/authRequire');

const router = express.Router();


router.get('/', getAllQuizzes);
router.post('/', authRequire, addQuiz);
router.get('/:id', authRequire, getQuizById);
router.post('/:id', authRequire, checkQuizAnswers);
router.put('/:id', authRequire, updateQuiz);
router.delete('/:id', authRequire, deleteQuiz);

module.exports = router;
