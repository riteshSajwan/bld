const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// this was not all caps in the env file

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log("connection successfull")
}).catch((err) => console.log('Connection error'));
