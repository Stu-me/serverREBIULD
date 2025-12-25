const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("home page");
});

router.get("/notices",(req,res)=>{
    res.send("notices are to be published here ");
});

router.get("/register",(req,res)=>{
    res.send("you are registered");
});

router.get("/login",(req,res)=>{
    res.send("you logined");
});

module.exports = router;