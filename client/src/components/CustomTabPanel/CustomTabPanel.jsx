import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabPanel.css";
import { FaLocationArrow } from "react-icons/fa";
import { doctData } from "../../data/data";
import { Link } from "react-router-dom";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const specialties = Array.from(
    new Set(doctData.map((doctor) => doctor.specialty))
  );

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const specialties = ["General Physician", "Pediatrician", "Obstetrician"];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="General Physician" {...a11yProps(0)} />
          <Tab label="Pediatrician" {...a11yProps(1)} />
          <Tab label="Obstetrician" {...a11yProps(2)} />
          <Tab label="Perinatologist" {...a11yProps(3)} />
          <Tab label="Postpartum Nurse" {...a11yProps(4)} />
          <Tab label="Gynaecologist" {...a11yProps(5)} />
          <Tab label="Dietitian" {...a11yProps(6)} />
          <Tab label="Physical Therapist" {...a11yProps(7)} />
          <Tab label="Nutritionist" {...a11yProps(8)} />
        </Tabs>
      </Box>
      {doctData.map((doctor, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <section className="light">
            <div className="container py-2">
              <article className="postcard light blue">
                <a className="postcard__img_link" href="#">
                  <img
                    className="postcard__img"
                    src={doctor.image}
                    alt="Image Title"
                  />
                </a>
                <div className="postcard__text t-dark">
                  <span className="typeDoct">{doctor.specialty}</span>
                  <h1 className="postcard__title blue">
                    <a href="#">{doctor.name}</a>
                  </h1>
                  <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {doctor.education}
                      <br />
                      {doctor.experience} | {doctor.language}
                    </time>
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    <div className="doctorStudy">
                      <i>
                        <FaLocationArrow />
                      </i>
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="doctorAvail">
                      <span>Next available at </span>
                      <span>
                        <strong>{doctor.nextAvailable}</strong>
                      </span>
                    </div>
                    <div className="doctorfees">
                      <span>Consultation fees</span>
                      <h2>
                        <strong>{doctor.consultationFees}</strong>
                      </h2>
                    </div>
                    <ul className="postcard__tagbox">
                      <Link to='/book-appointment'>
                        <li className="tag__item">
                          <i className="fas fa-tag mr-2"></i>Book Appointment
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </CustomTabPanel>
      ))}
      {/* <CustomTabPanel value={value} index={1}></CustomTabPanel>
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
      <CustomTabPanel value={value} index={3}></CustomTabPanel>
      <CustomTabPanel value={value} index={4}></CustomTabPanel>
      <CustomTabPanel value={value} index={5}></CustomTabPanel>
      <CustomTabPanel value={value} index={6}></CustomTabPanel>
      <CustomTabPanel value={value} index={7}></CustomTabPanel>
      <CustomTabPanel value={value} index={8}></CustomTabPanel> */}
    </Box>
  );
}
