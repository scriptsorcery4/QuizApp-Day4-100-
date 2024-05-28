const express = require("express");
const { loginUser, singupUser } = require("../controllers/userController");


const router = express.Router();

router.post("/login", loginUser);

router.post("/singup", singupUser);



module.exports = router;