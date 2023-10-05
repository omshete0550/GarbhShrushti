import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Doctor", "Patient"];
const defaultOption = options[0];

const Login = () => {
  const navigate = useNavigate();

  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dChnage, setDChange] = useState("");
  const [url, setUrl] = useState("");

  const handleLogin = async () => {
    try {
      // const logUrl = (dChnage == "Patient") ? "http://localhost:8800/api/auth/patientLogin" : "http://localhost:8800/api/auth/doctorLogin";
      if (dChnage === 'Patient') {
        setUrl("http://localhost:8800/api/auth/patientLogin");
      }
      else {
        setUrl("http://localhost:8800/api/auth/doctorLogin");
      }

      const data = {
        username: UserName,
        password: password,
      };
      localStorage.setItem("password", data.password);
      console.log(data);
      // if (dChnage === "Patient") {
      //   navigate("/college-dashboard");
      // }
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("userId", data._id);
        localStorage.setItem("userName", data.name);
        localStorage.setItem("email", data.email);
        if (dChnage == 'Patient') {
          navigate("/hhhh");
        }
        else {

        }

      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // async function handleLogin(){
  //   if(dChnage == 'Patient'){
  //     let resp = await fetch("http://localhost:8800/api/auth/patientLogin",{'METHOD':"POST"
  //     }).then((res)=>res.json()).then((data)=>{
  //       console.log(data);
  //     });
  //   }
  // }

  console.log(dChnage);
  return (
    <div className="LoginMainContainer">
      <section className="Logincontainer">
        <div className="image-section">
          <div className="image-wrapper">
            <img src="https://imgur.com/wDmDIhi.png" alt="" />
          </div>

          <div className="content-container">
            <h1 className="section-heading">
              Providing Maternal and Prenatal Care
            </h1>
            <p className="section-paragraph">
              Ensuring the health and well-being of mothers and their babies is
              our priority. Every step forward is a step towards a healthy
              future. Embrace the journey to motherhood.
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

            <h2>Welcome Back! 👋🏻</h2>
            <p>Enter your credentials to access your account.</p>

            <div style={{ width: "31em", marginBottom: "2em" }}>
              <select
                style={{ width: "41em", padding: "10px 20px" }}
                id="interestedService"
                value={dChnage}
                onChange={(e) => setDChange(e.target.value)}
                required={true}
              >
                <option value="">Select User</option>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div className="input-container">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="email"
                  autocomplete="off"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
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

            <button className="login-btn" onClick={handleLogin}>
              Log In
            </button>

            <div className="or-divider">or</div>

            <p className="regPara">Don't have an account?</p>
            <Link to="/register">
              <button className="google-signin">Register</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
