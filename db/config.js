const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI).then(()=> console.log("db connected.")).catch((err)=> console.warn(`db failed to connect, error : ${err}`))