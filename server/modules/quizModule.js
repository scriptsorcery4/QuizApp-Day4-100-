const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const quSchema = new Schema({

  content: {
    type: String,
    required: true
  }

});

const qusSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  corQu: {
    type: Number,
    required: true
  },

  qu: [quSchema]
});


const quizSchema = new Schema({
    
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  numQus: {
    type: Number,
    required: true
  },

  qus: [qusSchema],

  created_at: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
