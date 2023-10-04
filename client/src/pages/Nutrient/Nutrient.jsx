import React,{useState} from "react";
import "./Nutrient.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import NutrientTabs from "../../components/NutrientTab/NutrientTabs";

const options = [
  "Type 1 Diabetes (T1D)",
  "Type 2 Diabetes (T2D)",
  "Gestational Diabetes Mellitus ",
  "Monogenic Diabetes",
  "Secondary Diabetes",
];
const bloodP = ["Primary (Essential) Hypertension", "Secondary Hypertension"];
const Cholesterol = [
  "Low-Density Lipoprotein (LDL)",
  "High-Density Lipoprotein (HDL)",
  "High Total Cholesterol (Hypercholesterolemia)",
  "High Triglycerides (Hypertriglyceridemia)",
  "Dyslipidemia"
];
const defaultOption = options[0];
const blooddefaultOption = bloodP[0];
const CholesteroldefaultOption = Cholesterol[0];

const Nutrient = () => {
  const [selectedDiabetesType, setSelectedDiabetesType] = useState("def");
  const [showDietPlan, setShowDietPlan] = useState(false);
  const handleDiabetesTypeChange = (selectedOption) => {
    setSelectedDiabetesType(selectedOption.value);
    setShowDietPlan(false);
    console.log(selectedDiabetesType);
  };
  const displayDiet = () => {
    setShowDietPlan(true);
  };
  return (
    <>
      <div className="NutrientCont">
        <div style={{ marginTop: "2em", padding: "20px 40px" }}>
          <h1 style={{ color: "#1977cc", marginBottom: "1em" }}>
            Nutrient Tracker
          </h1>
          <div
            className="NutrientDropDown"
            style={{ display: "flex", gap: "2em" }}
          >
            <div style={{ width: "25%" }}>
              <span style={{ color: "#1977cc", marginBottom: "0.5em" }}>
                Month of Pregnancy
              </span>
              <input type="number" placeholder="Enter your pregnancy month" />
            </div>

            <div style={{ width: "25%" }}>
              <span style={{ color: "#1977cc", marginBottom: "0.5em" }}>
                Diabetes
              </span>
              <div style={{ marginTop: "1em" }}>
                <Dropdown
                  options={options}
                  defaultValue={defaultOption}
                  onChange={handleDiabetesTypeChange}
                  placeholder="Select an option"
                />
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <span style={{ color: "#1977cc", marginBottom: "0.5em" }}>
                Blood Pressure
              </span>
              <div style={{ marginTop: "1em" }}>
                <Dropdown
                  options={bloodP}
                  value={blooddefaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <span style={{ color: "#1977cc", marginBottom: "0.5em" }}>
                Cholesterol
              </span>
              <div style={{ marginTop: "1em" }}>
                <Dropdown
                  options={Cholesterol}
                  defaultOption={CholesteroldefaultOption}
                  
                  placeholder="Select an option"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="GptNutrient">
            <button onClick={displayDiet}>Give Diet Plan</button>
        </div>

        {/* <div className="NutrientsTabsCont">
            <NutrientTabs c={1}/>
        </div> */}
        {showDietPlan && (
          <div className="NutrientsTabsCont">
            <NutrientTabs diabetesType={selectedDiabetesType} c={1} />
          </div>
        )}
      </div>

    </>
  );
};

export default Nutrient;
