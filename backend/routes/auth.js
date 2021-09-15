const express =require('express');
const router =express.Router();
const User  =require('../models/User');
const { body, validationResult } = require('express-validator');

//create user using post method "/api/auth/",doest require auth 
router.post('/',body('email','Enter a Valid Mail').isEmail(),body('name','Enter Valid Name').isLength({ min: 5 }),body('password','Password atLest 5 Character ').isLength({ min: 5 }),(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

 
 User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  }).then(user => res.json(user)).catch(err=>{console.log(err) 
    res.json({error: 'please ente unique Value ' ,
    message: err.message })});
})

module.exports = router