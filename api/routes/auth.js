const router = require('express').Router();
const bcrypt = require('bcrypt')

const User = require("../models/User");

//Register

router.post("/register", async(req,res)=>{
    const {name, email, phone, BloodGroup,city, password, cpassword } = req.body; 
    if(!name || !email || !phone || !BloodGroup || !city||!password ||  !cpassword ){
    
        return res.status(422).json({error: "Fill the form"});
    }
    try{
        const userExist =  await User.findOne({email:email}); //email already present 
        if(userExist){
            // return res.status(422).json(alert("Email already exist"));
            return res.status(422).json({error: "Email already exist"});
            }
         else if(password != cpassword){
            return res.status(422).json({error: "Password not matched"});
        }
        else{

            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            const Newuser = new User({name, email, phone, BloodGroup,city, password:hashedPass, cpassword:hashedPass});  //can also hassh in models
            const user = await Newuser.save();
            res.status(201).json({message : "user registered sucessfuly"});
            // res.status(200).json(user);
        }
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;