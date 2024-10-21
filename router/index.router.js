const express = require("express");
const { blogfindAll, blogAdd } = require("../controller/blog.controller");
const userRouter = new express.Router();


userRouter.get('/' , (req,res) => {res.send('hello from router')} );

userRouter.get('/blog' , blogfindAll );
userRouter.post('/blog' , blogAdd );

module.exports = {userRouter};