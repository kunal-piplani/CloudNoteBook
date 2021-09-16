const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const { findOne } = require("../models/User");
const JWT_SECRET = "ItsKunalPiplani$1234";
//create user using post method "/api/auth/",doest require auth
//Route 1

router.post(
  "/CreateUser",
  body("email", "Enter a Valid Mail").isEmail(),
  body("name", "Enter Valid Name").isLength({ min: 5 }),
  body("password", "Password atLest 5 Character ").isLength({ min: 5 }),

  async (req, res) => {
    //if ERROR ?Bad REquest :Good Request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check With Email exist

    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        res.status(400).json({ error: "Sorry user exist with that email" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //   then(user => res.json(user)).catch(err=>{console.log(err)
      //     res.json({error: 'please ente unique Value ' ,
      //     message: err.message })});
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch {
      console.error(error.message);
      res.sendStatus(500).send("Some error ocuured ");
    }
  }
);

//Route :2
//Auhenticate user using post method "/api/auth/",doest require auth
router.post(
  "/login",
  [
    body("email", "Enter a Valid Mail").isEmail(),
    body("password", "password cannot be blank ").exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(500)
          .json({ error: "Please enter With Correct Credentials " });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(500)
          .json({ error: "Please enter With Correct Credentials " });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500).send("Internal Server Error  ");
    }
  }
);

//Route 3 
router.post("/getuser",fetchuser, async (req, res) => {
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error  ");
  }
});
module.exports = router;
