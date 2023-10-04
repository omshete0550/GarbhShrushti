import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {BsChatLeftTextFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import { SiShopware } from "react-icons/si";
// import { BsChatLeftTextFill } from "react-icons/bs";
// import { IoMdNotifications } from "react-icons/io";
import "./Navbar.css";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="navbarContainer">
        <div className="heading">
          <i>
            <SiShopware />
          </i>
          <h2>MediBuddy</h2>
        </div>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>
            <Button
              id="basic-button"
              className="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i>
                {" "}
                <IoMdNotifications />
              </i>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                Welcome to Stage 2{" "}
                <p style={{ padding: "0 15px", color: "#acacac" }}>2h</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Time for Exercise{" "}
                <p style={{ padding: "0 15px", color: "#acacac" }}>4h</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Time for Nurtient Strike{" "}
                <p style={{ padding: "0 15px", color: "#acacac" }}>2d</p>
              </MenuItem>
            </Menu>
          </li>
          <li style={{ color: "#1977cc" }}>
            <i>
              {" "}
              <BsChatLeftTextFill />
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
