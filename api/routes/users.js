const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//update users data

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      //if password is sent in the body to update
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      // mongoose.set('useFindAndModify', false);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //finding user in db
          $set: req.body,
        },
        {
          new: true, //this will send new updatedUser in response
        }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

// //delete


// router.delete("/:id", async (req, res) => {
//   //to delete that user with id
//   //comparing url with user id if same we can delete can also use jwt
//   if (req.body.userId === req.params.id) {
//     try {
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("User has been deleted Successfully");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(401).json("You can delete only your account");
//   }
// });

//get all users
router.get("/find", async (req, res) => {
  try {
    const user = await User.find({}, { password: 0, cpassword: 0 }); //find the user
    // const  { password,cpassword, ...other} = user;
    // console.log(others);

    res.status(200).json(user);
    // res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user with specific tag
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); //find the user
    const { password, ...others } = user._doc; //provide the details to user except password

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
