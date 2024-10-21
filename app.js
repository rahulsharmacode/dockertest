const express = require("express");
const app = express();
require("./db/config")
const {userRouter} = require('./router/index.router');

app.use(express.json());
app.use(userRouter);


app.listen(process.env.PORT || 3000 , ()=> console.log(`server running at port: ${process.env.PORT || 3000} `));