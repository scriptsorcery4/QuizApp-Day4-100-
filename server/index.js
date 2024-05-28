require("dotenv").config();

const express  = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require('./routes/userRoute')
const quizRoute = require('./routes/quizRoute')


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute)
app.use('/api/quiz', quizRoute)

app.get('/',(req, res)=>{
    res.send('Hello from backend');
})

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db and lisening on: http://localhost:" + process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });