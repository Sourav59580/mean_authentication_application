const express = require('express');
const router = express();

// Register
router.get('/register',(req,res)=>{
    res.send("user registration !");
})

// Authentication
router.post("/authenticate",(req,res)=>{
    res.send("Authenticate");
})

// Profile
router.get('/profile',(req,res)=>{
    res.send("PROFILE");
})

// Validate
router.get('/validate',(req,res)=>{
    res.send("Validate");
})





module.exports = router;