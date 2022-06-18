import "./register.css";
 

// import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault(); //just to prevent refreshing of page every time on submission   

    //setError(false);
    
    try {

       const res = await axios.post("https://donner-back-end.herokuapp.com/api/auth/register", {
        //need to handel error in register page
        name,
        email,
        phone,
        BloodGroup,
        city,
        password,
        cpassword,
      }); 
      console.log("res :",res);

      
      


      //response code

      if(res.status === 200){
        window.alert("Registration successful You can Check Your data in Blood Group Section")
        window.location.replace("/");
      }
      else{
        window.alert("Invalid Credentials")
    }
    
     
      
      
    
      // window.alert("User Registered Successfully");
      // res.data && window.location.replace("/"); //if user is registered it will redirect user to login
    } catch (err) {
      setError(true);
      JSON.stringify(err);
     console.log("error",err); 
     if(err.status=== 422){
       window.alert(" Invalid Credentials");
     }
     else{
       window.alert(" Something went Wrong..");

     }
 
    }
  };

  return (
    
    <div className="container register-container">
      <div className="row register-row">
        <div className="col col--12 col-medium--6 col-large--6 register-col">
          <h3>Registration Form</h3>
        </div>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row register-row">
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row register-row">
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Email</label>
            <input
              type="text"
              className="input"
              placeholder="Your valid email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Phone</label>
            <input
              type="number"
              className="input"
              max="9999999999"
              placeholder="Enter Your valid 10 digit Phone Number..."
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row register-row">
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Blood Group</label>
            <input
              type="string"
              className="input"
              placeholder="Enter Your BloodGroup..."
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>City/Town/Landmark(State)</label>
            <input
              type="string"
              className="input"
              placeholder="Enter Your Current Living Address..."
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="row register-row">
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col col--12 col-medium--6 col-large--6 register-col">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm Your Password.."
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <div className="col col--12">
            <div className="register-row ">
              <div className="col">
                <button className="button button--primary" id="sign-in-button"  type="submit">
                  Register
                </button>
              </div>
              {error && (
                <span className=" button button--error">Something Went Wrong</span>
                //   Do not use this because of responsive issues, will fix later

                // <div className="col col--12 col-medium--4">
                //   <div className="button button--error">
                //     <span>Something Went Wrong!</span>
                //   </div>
                // </div>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="login">
        {/* <span className="text">Already Have Account</span> */}
        {/* <button className="registerloginButton">
                    <Link className="link" to="/login">Login</Link>
                </button> */}
      </div>

      {/* {error && window.alert("Something Went Wrong")}   //if error use span */}
    </div>
  );
}
  