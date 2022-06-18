const mongoose  = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        
        required: 'Please enter your email',
        trim: true,
        lowercase:true,
        unique:[true,"Error: Email already present"],
      
    },
    phone:{
        type:Number,
        min:1111111111,
        max:9999999999,
        required:true,

    },
    BloodGroup:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
},{  timestamps:true}
);


// //hashing password in models 
// userSchema.pre('save',async function(next){
//     if(this.isModified('password')){ //this method will be called before save only if password is modified
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword =await bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });


const User = new mongoose.model('User',UserSchema);

module.exports = User;