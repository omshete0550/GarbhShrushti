import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Doctor","Patient"];
const defaultOption = options[0];

const Login = () => {
  const navigate = useNavigate();

  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const logUrl = "http://localhost:8800/api/auth/login";

      const data = {
        username: UserName,
        password: password,
      };
      if (dChnage === "Institution") {
        navigate("/college-dashboard");
      }
      const response = await axios.post(logUrl, data);
      if (response.status === 200) {
        localStorage.setItem("userLoggedIn", response.data.username);
        localStorage.setItem("userId", response.data._id);
        localStorage.setItem("userLoggedInEmailID", response.data.email);
        navigate("/dashboard");
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [dChnage, setDChange] = useState("");
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
                <option value="User">Patient</option>
                <option value="Institution">Doctor</option>
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
