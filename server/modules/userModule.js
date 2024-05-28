const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    exp: {
      type: Number,
      default: 0,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
})

userSchema.statics.login = async function (email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user  = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password");
      }
    
    return user;
}

userSchema.statics.singup = async function (username, email, password) {
        
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
  
    const exists = await this.findOne({ email });
  
    if (exists) {
      throw Error("Email already exist");
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({
      username: username,
      email: email,
      password: hash,
    });
  
    return user;
  };

      
module.exports = mongoose.model("User", userSchema);
