import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function NutrientTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
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
        </TabPanel>
        <TabPanel value="2">
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
        </TabPanel>
        <TabPanel value="3">
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
        </TabPanel>
      </TabContext>
    </Box>
  );
}
