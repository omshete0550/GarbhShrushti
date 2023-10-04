import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age,setAge] = useState(0);
  const [monthOfPregnancy,setMonthOfPregnancy] = useState(0);
  const [location,setLocation] = useState("Na");
  // const [stage,setStage] = useState(0)
  // const [userInfo,setUserInfo] = useState({});

  const handleRegister = async () => {
    try {
      // Define your API endpoint for login
      const regUrl = "http://localhost:8800/api/auth/patientRegister"; // Replace with your actual API URL
      // Create a data object with user input
      const data = {
        email: email,
        name: name,
        password: password,
        age,
        monthOfPregnancy,
        location
      };
      console.log(data);
      // Make a POST request to the API
      const response = await fetch("http://localhost:8800/api/auth/patientRegister",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
      })
      console.log(response);
      // Handle the response, e.g., redirect to a dashboard on success
      if (response.status === 201) {
        const data = await response.json();
        // localStorage.setItem("userRegged", response.data);
        console.log(data);
        console.log("Registered User");
        navigate("/login");

        // Redirect to the dashboard or perform other actions
        // You can use React Router to navigate to another page
        // Example: history.push("/dashboard");
      } else {
        console.log(response)
      }
    } catch (error) {
      // Handle errors, e.g., network issues, server errors
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="LoginMainContainer">
      <section className="Logincontainer">
        <div className="image-section">
          <div className="image-wrapper">
            <img src="https://imgur.com/wDmDIhi.png" alt="" />
          </div>

          <div className="content-container">
            <h1 className="section-heading">
              Education is one thing no one can take away from you....
            </h1>
            <p className="section-paragraph">
              Every step forward is a step towards knowledge. Embrace the
              journey.
            </p>
          </div>
        </div>

        <div className="form-section">
          <div className="form-wrapper">
            <div className="logo-container">
              <a href="#" className="logo-container">
                <img src="https://i.imgur.com/oEwRvoF.png" alt="Logo" />
              </a>
            </div>

            <h2>Hey! Let's Get Started 👋🏻</h2>
            <p>Enter your credentials to register your account.</p>

            <div className="input-container">
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  id="email"
                  autocomplete="off"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  autocomplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="email">Phone no.</label>
                <input type="number" id="email" autocomplete="off" onChange={(e) => setPhone(e.target.value)}/>
              </div> */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="stage">Stage</label>
                <input
                  type="number"
                  id="stage"
                  onChange={(e) => setStage(e.target.value)}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="stage">Month of Pregnancy</label>
                <input
                  type="number"
                  id="monthOfPregnancy"
                  onChange={(e) => setMonthOfPregnancy(e.target.value)}
                />
              </div>


            </div>

            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" value="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>

              <a href="#">Forgot password?</a>
            </div>

            <button className="login-btn" onClick={handleRegister}>
              Register
            </button>

            <div className="or-divider">or</div>

            <p className="regPara">Already have an account?</p>
            <Link to="/login">
              <button className="google-signin">Log In</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
