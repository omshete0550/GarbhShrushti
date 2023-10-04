import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./BasicTabs.css";
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
          centered
        >
          <Tab label="Stage 1" {...a11yProps(0)} />
          <Tab label="Stage 2" {...a11yProps(1)} />
          <Tab label="Stage 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="StageConatiner">
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Duration:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>1 Week - 12 Weeks</p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Common Symptoms:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Morning sickness (nausea and vomiting)</li>
                    <li>Fatigue</li>
                    <li>Frequent urination</li>
                    <li>Tender or swollen breasts</li>
                    <li>Food aversions or cravings</li>
                    <li>Mood Swings</li>
                    <li>Increased sense of smell</li>
                    <li>Constipation</li>
                    <li>Heartburn</li>
                    <li>Mild pelvic cramping</li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Things That Should Not Be Ignored:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Bleeding or spotting</li>
                    <li>Severe abdominal pain</li>
                    <li>High fever</li>
                    <li>Severe vomiting and dehydration</li>
                    <li>Changes in vision</li>
                    <li>Severe headaches</li>
                    <li>Chest pain or shortness of breath</li>
                    <li>Severe dizziness</li>
                    <li>Significant weight loss</li>
                    <li>Vaginal discharge with an unusual color or odor</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Mild emergency guidelines</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Bleeding:</strong> If you experience any vaginal
                      bleeding, contact your healthcare provider. Light spotting
                      can be normal, but heavy bleeding may be a concern.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Severe Abdominal Pain:</strong> If you have severe
                      or persistent abdominal pain, especially if it's
                      accompanied by bleeding, seek immediate medical attention
                      as it may indicate an ectopic pregnancy or miscarriage.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Dehydration:</strong> If you have severe nausea
                      and vomiting, leading to dehydration, contact your
                      healthcare provider for guidance on managing fluids and
                      potential medication.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Unrelenting Headaches: </strong> Persistent and
                      severe headaches that don't improve with rest or
                      over-the-counter pain relievers should be discussed with
                      your healthcare provider.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="BtnDivs">
              <button>Book An Appoitment</button>
              <button>Get Nutrition Diet</button>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="StageConatiner">
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Duration:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>13 Weeks - 26 Weeks</p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Common Symptoms:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Reduced nausea</li>
                    <li>Increased energy</li>
                    <li>Visible baby bump</li>
                    <li>Fetal movements (quickening)</li>
                    <li>Backache</li>
                    <li>Leg cramps</li>
                    <li>Nasal congestion</li>
                    <li>Stretch marks</li>
                    <li>Darkening of the skin (chloasma)</li>
                    <li>Changes in hair and nail growth</li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Things That Should Not Be Ignored:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Severe swelling of hands, feet, or face</li>
                    <li>Rapid weight gain</li>
                    <li>Severe headaches or vision changes</li>
                    <li>Painful or burning urination</li>
                    <li>Severe abdominal pain or cramping</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Mild emergency guidelines</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Vaginal Bleeding:</strong> Any vaginal bleeding
                      beyond light spotting should be evaluated by your
                      healthcare provider.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong> Severe Swelling:</strong> If you experience
                      sudden and severe swelling of your hands, face, or legs,
                      contact your healthcare provider as it could be a sign of
                      preeclampsia.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Severe Headaches or Visual Disturbances:</strong>{" "}
                      Persistent and severe headaches, along with changes in
                      vision, may be a sign of preeclampsia. Contact your
                      healthcare provider immediately.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="BtnDivs">
              <button>Book An Appoitment</button>
              <button>Get Nutrition Diet</button>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="StageConatiner">
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Duration:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>27 Weeks - 40+ Weeks</p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Common Symptoms:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Increased fetal movement</li>
                    <li>Shortness of breath</li>
                    <li>Braxton Hicks contractions (practice contractions)</li>
                    <li>Trouble sleeping</li>
                    <li>Swelling in the legs and ankles</li>
                    <li>Frequent urination</li>
                    <li>Pelvic pressure</li>
                    <li>Backache</li>
                    <li>Heartburn</li>
                    <li>Anxiety about labor and delivery</li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <div className="TrimesterTitle">
                <h3>Things That Should Not Be Ignored:</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li>Decreased fetal movement</li>
                    <li>Vaginal bleeding</li>
                    <li>Persistent severe headaches</li>
                    <li>Seizures</li>
                    <li>
                      Signs of preeclampsia (high blood pressure, protein in
                      urine)
                    </li>
                    <li>Signs of gestational diabetes (high blood sugar)</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div>
              <div className="TrimesterTitle">
                <h3>Mild emergency guidelines</h3>
              </div>
              <div className="TrimesterDesc">
                <p>
                  <ul>
                    <li style={{ marginBottom: "1em" }}>
                      <strong> Decreased Fetal Movement:</strong> If you notice
                      a significant decrease in your baby's movements, try lying
                      on your left side and focusing on fetal movement for two
                      hours. If you still don't feel movements, contact your
                      healthcare provider.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>High Fever:</strong> If you develop a fever above
                      100.4°F (38°C), contact your healthcare provider for
                      evaluation and potential treatment.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Severe Fatigue:</strong> Extreme and persistent
                      fatigue that affects your daily life should be discussed
                      with your healthcare provider.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Severe Swelling or Edema:</strong> Sudden or
                      severe swelling in your extremities, face, or ankles
                      should be evaluated by your healthcare provider.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Chest Pain or Palpitations:</strong> If you
                      experience chest pain, difficulty breathing, or
                      palpitations, seek immediate medical attention.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                      <strong>Severe Mood Changes:</strong> If you have severe
                      anxiety, depression, or mood changes that significantly
                      affect your daily life, discuss this with your healthcare
                      provider for support.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="BtnDivs">
              <button>Book An Appoitment</button>
              <button>Get Nutrition Diet</button>
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
