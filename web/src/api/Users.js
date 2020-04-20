const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


//Bring in Models
let UserModel = require('../models/UserModel')

router.get('/all', (req,res) => {

  UserModel.find({}, (err,users) => {
    if (err) {
      console.error(err)
    }
    else {
        res.json(users) 
    }
  })
})

const User = {
    UserName: 'nikolas',
    email: 'nikfilias7@gmail.com',
    password: 'nikfil'
  }
  
  router.post('/add', async (req, res) => {
    const user = new UserModel({
        UserName: User.UserName,
        email: User.email,
        password: User.password
    })
    try {
        const savedUser = await user.save();
        res.json(savedUser)
    }
    catch (err) {
        res.json({message: err})
    }
});

module.exports = router;