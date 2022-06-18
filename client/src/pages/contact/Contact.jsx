import "./contact.css";
// import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault(); //just to prevent refreshing of page every time on submission

    setError(false);
    try {
        const res = await axios.post("https://donner-back-end.herokuapp.com/send", {    //need to handle error in register page
            name,
            email,
            phone,
            message
        });
        window.alert("Message sent Successfully");
        res.data && window.location.replace("/");
       
    } catch (err) {
        setError(true);
        window.alert("Message not Sent ");
        window.location.replace("/");
        // console.log(err);
    }
};

  return (
    <>
    <div className="container contact-container">
      <div className="row contact-row">
        <div className="col col--12 col-medium--6 col-large--6 contact-col">
          <h3>Contact us</h3>
        </div>
        <form className="container" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="input"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            className="input"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="number"
            className="input"
            placeholder="Your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Enter Message</label>
          <textarea
            className="textarea"
            placeholder="Enter message"
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="col col--12">
            <div className="register-row ">
              <div className="col col--12 col-medium--4">
                <button className="button button--primary" type="submit">
                  <span>Submit</span>
                </button>{" "}
              </div>
              {error && (
                <span>Something Went Wrong</span>
                //   Do not use this because of responsive issues, will fix later

                // <div className="col col--12 col-medium--4">
                //   <div className="button button--error">
                //     <span>Something Went Wrong!</span>
                //   </div>
                // </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
    
        </>
  );
}
