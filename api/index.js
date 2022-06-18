const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const nodemailer = require('nodemailer');
const cors = require("cors");
const userRoute = require("./routes/users");
// const userContact = require("./routes/contact")
// const path = require("path");
const PORT = process.env.PORT || 5000;



app.use(express.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

dotenv.config({path:"./config.env"});

require("./db/conn");

app.post("/send", async(req,res)=>{
  let{name,email,phone,message} = req.body;
    if(!name|| !email|| !phone|| !message){
      res.status(404).json("Fill the form")
    }
    else{

      try{

        
        const transporter = nodemailer.createTransport({
          host:  process.env.MAIL_HOST, //replace with your email provider
          port:  process.env.MAIL_PORT,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          }
        });
        
        await transporter.sendMail({
          from: process.env.MAIL_FROM,
          to:"test@test.com",
          subject:"test",
          html:`<div>
          
          <h1>${name}<h1/>
          <h1>${email}<h1/>
          <h1>${phone}<h1/>
          <h1>${message}<h1/>
          
          <div/>
          `,
          
        })
          res.status(201).json({message : "user registered sucessfuly"});

      }catch(err){
        
        res.status(500).json(err);
      }
      
    }

})




app.use("/api/auth",cors(),authRoute); 
app.use("/api/users",cors(),userRoute); 
// app.use("/api/contact",cors(),userContact); 
// app.use(require('./routes/auth')) //not using middleware
app.listen(PORT, ()=>{
    console.log(`Backend running at PORT ${PORT}`);
})