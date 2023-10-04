import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabPanel.css";
import { FaLocationArrow } from "react-icons/fa";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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
      <CustomTabPanel value={value} index={0}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <span className="typeDoct">General Physician</span>
                <h1 className="postcard__title blue">
                  <a href="#">Dr. Vijay Kumar K</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    MBBS-General Medicine, MD-General Medicine
                    <br />
                    12 Years | English
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <div className="doctorStudy">
                    <i>
                      <FaLocationArrow />
                    </i>
                    <span>Aster RV Hospital</span>
                  </div>
                  <div className="doctorAvail">
                    <span>Next available at </span>
                    <span>
                      <strong>10.00 AM</strong>- 6 Oct, Fri
                    </span>
                  </div>
                  <div className="doctorfees">
                    <span>Consultation fees</span>
                    <h2>
                      <strong>₹500 /-</strong>
                    </h2>
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Book Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </CustomTabPanel>
    </Box>
  );
}
