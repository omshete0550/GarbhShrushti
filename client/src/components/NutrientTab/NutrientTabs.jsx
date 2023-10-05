import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function NutrientTabs(props) {
  // const [value, setValue] = React.useState("1");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const { diabetesType } = props;

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.diabetesType);

  return (
    <>
     {diabetesType === "Type 1 Diabetes (T1D)" && (
        <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Guidelines" value="3" />
            <Tab label="North Indian Diet" value="1" />
            <Tab label="South Indian Diet" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div className="TrimesterTitle">
              {/* <h3>North Indian Nutrition Diet:</h3> */}
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Vegetable paratha made with whole wheat flour</li>
                  <li style={{"padding":"5px 0px"}}>Curd (yogurt)</li>
                  <li style={{"padding":"5px 0px"}}>A small serving of mixed fruit</li>
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>A handful of unsalted nuts (e.g., almonds, walnuts)</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li style={{"padding":"5px 0px"}} >Brown rice or whole wheat roti</li>
                  <li style={{"padding":"5px 0px"}} >Lentil curry (dal)</li>
                  <li style={{"padding":"5px 0px"}} >Mixed vegetable sabzi</li>
                  <li style={{"padding":"5px 0px"}} >A side of salad</li>
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li style={{"padding":"5px 0px"}}>Fresh fruit (e.g., apple or orange)</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li style={{"padding":"5px 0px"}}>Grilled or baked chicken or fish (lean protein source)</li>
                  <li style={{"padding":"5px 0px"}}>Quinoa or brown rice</li>
                  <li style={{"padding":"5px 0px"}}>Steamed broccoli and carrots</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
        <div>
            <div className="TrimesterTitle">
              {/* <h3>South Indian Nutrition Diet:</h3> */}
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Idli or dosa made with whole urad dal and brown rice</li>
                  <li style={{"padding":"5px 0px"}}>Sambar (made with plenty of vegetables and minimal oil)</li>
                  <li style={{"padding":"5px 0px"}}>Coconut chutney</li>
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Greek yogurt (unsweetened) with a sprinkle of flaxseeds</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li style={{"padding":"5px 0px"}}>Brown rice or millet (like foxtail millet)</li>
                  <li style={{"padding":"5px 0px"}}>Rasam (a light, tangy soup)</li>
                  <li style={{"padding":"5px 0px"}}>Mixed vegetable curry</li>
                  <li style={{"padding":"5px 0px"}}>Cucumber raita</li>
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li style={{"padding":"5px 0px"}}>Sliced cucumber with hummus</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li style={{"padding":"5px 0px"}}>Grilled or baked fish or tofu (protein source)</li>
                  <li style={{"padding":"5px 0px"}}>Quinoa or brown rice</li>
                  <li style={{"padding":"5px 0px"}}>Stir-fried spinach and bell peppers</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div>
            <div className="TrimesterTitle">
              <h3>Dietery Guidelines</h3>
            </div>
            <div className="TrimesterDesc">
              <p>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Balanced Macronutrients: Ensure your meals have a balance of carbohydrates, proteins, and healthy fats to help stabilize blood sugar levels.</li>
                  <li style={{"padding":"5px 0px"}}>Fiber-rich Foods: Include plenty of fiber in your diet to help control blood sugar and cholesterol levels. Foods like whole grains, vegetables, and legumes are excellent choices.</li>
                  <li style={{"padding":"5px 0px"}}>Portion Control: Be mindful of portion sizes to avoid overeating, which can lead to fluctuations in blood sugar levels.</li>
                  <li style={{"padding":"5px 0px"}}>Regular Meals: Eat regularly scheduled meals and snacks to maintain steady blood glucose levels.</li>
                  <li style={{"padding":"5px 0px"}}>Hydration: Stay well-hydrated by drinking plenty of water throughout the day.</li>
                  <li style={{"padding":"5px 0px"}}>Low-Glycemic Carbohydrates: Choose complex carbohydrates with a low glycemic index (GI) to help control blood sugar. Examples include whole grains, quinoa, sweet potatoes, and legumes.</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        </TabContext>
        </Box>)}
        {diabetesType === "Type 2 Diabetes (T2D)" && (
        <Box>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Guidelines" value="3" />
            <Tab label="North Indian Diet" value="1" />
            <Tab label="South Indian Diet" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div className="TrimesterTitle">
              {/* <h3>North Indian Nutrition Diet:</h3> */}
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Scrambled eggs with spinach and tomatoes (cooked in olive oil)</li>
                  <li style={{"padding":"5px 0px"}}>Whole-grain toast</li>
                  <li style={{"padding":"5px 0px"}}>A small serving of fresh berries</li>
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Greek yogurt (unsweetened) with a sprinkle of chia seeds</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li style={{"padding":"5px 0px"}}>Quinoa salad with grilled chicken or tofu, mixed vegetables, and a vinaigrette dressing</li>
                  <li style={{"padding":"5px 0px"}}>A side of sliced cucumbers and cherry tomatoes</li>
                  {/* <li>Mixed vegetable sabzi</li>
                  <li>A side of salad</li> */}
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li style={{"padding":"5px 0px"}}>Celery and carrot sticks with hummus</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li style={{"padding":"5px 0px"}}>Baked salmon with a lemon-herb marinade</li>
                  <li style={{"padding":"5px 0px"}}>Steamed broccoli and cauliflower</li>
                  <li style={{"padding":"5px 0px"}}>Quinoa or wild rice</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
        <div>
            <div className="TrimesterTitle">
              {/* <h3>South Indian Nutrition Diet:</h3> */}
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Moong dal dosa or pesarattu (made from green gram) with coconut chutney</li>
                  <li style={{"padding":"5px 0px"}}>A small bowl of curd (yogurt) with sliced cucumber</li>
                  {/* <li>Coconut chutney</li> */}
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li style={{"padding":"5px 0px"}}>A small serving of fresh papaya or guava</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li style={{"padding":"5px 0px"}}>Brown rice or millet (like foxtail millet)</li>
                  <li style={{"padding":"5px 0px"}}>Spinach and lentil curry (keerai kuzhambu)</li>
                  <li style={{"padding":"5px 0px"}}>A side of sliced tomatoes</li>
                  <li style={{"padding":"5px 0px"}}>Cucumber raita</li>
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li style={{"padding":"5px 0px"}}>Buttermilk with a pinch of roasted cumin powder</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li style={{"padding":"5px 0px"}}>Grilled or baked fish (if desired) or paneer (cottage cheese) for vegetarians</li>
                  <li style={{"padding":"5px 0px"}}>Quinoa or brown rice</li>
                  <li style={{"padding":"5px 0px"}}>Mixed vegetable curry (korma) with minimal oil</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div>
            <div className="TrimesterTitle">
              <h3>Dietery Guidelines</h3>
            </div>
            <div className="TrimesterDesc">
              <p>
                <ul>
                  <li style={{"padding":"5px 0px"}}>Balanced Macronutrients: Ensure that your meals have a balance of carbohydrates, proteins, and healthy fats to help stabilize blood sugar levels.</li>
                  <li style={{"padding":"5px 0px"}}>Fiber-rich Foods: Include plenty of fiber in your diet to help control blood sugar and cholesterol levels. Foods like whole grains, vegetables, and legumes are excellent choices.</li>
                  <li style={{"padding":"5px 0px"}}>Portion Control: Be mindful of portion sizes to avoid overeating, which can lead to fluctuations in blood sugar levels.</li>
                  <li style={{"padding":"5px 0px"}}>Regular Meals: Eat regularly scheduled meals and snacks to maintain steady blood glucose levels.</li>
                  <li style={{"padding":"5px 0px"}}>Hydration: Stay well-hydrated by drinking plenty of water throughout the day.</li>
                  <li style={{"padding":"5px 0px"}}>Low-Glycemic Carbohydrates: Choose complex carbohydrates with a low glycemic index (GI) to help control blood sugar. Examples include whole grains, quinoa, sweet potatoes, and legumes.</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>)}
    {diabetesType === "def" && (
        <Box>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Guidelines" value="3" />
            <Tab label="North Indian Diet" value="1" />
            <Tab label="South Indian Diet" value="2" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">
          <div>
            <div className="TrimesterTitle">
              <h3>North Indian Nutrition Diet:</h3>
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li>Scrambled eggs with spinach and tomatoes (cooked in olive oil)</li>
                  <li>Whole-grain toast</li>
                  <li>A small serving of fresh berries</li>
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li>Greek yogurt (unsweetened) with a sprinkle of chia seeds</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li>Quinoa salad with grilled chicken or tofu, mixed vegetables, and a vinaigrette dressing</li>
                  <li>A side of sliced cucumbers and cherry tomatoes</li>
                  {/* <li>Mixed vegetable sabzi</li>
                  <li>A side of salad</li> 
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li>Celery and carrot sticks with hummus</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li>Baked salmon with a lemon-herb marinade</li>
                  <li>Steamed broccoli and cauliflower</li>
                  <li>Quinoa or wild rice</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
        <div>
            <div className="TrimesterTitle">
              <h3>South Indian Nutrition Diet:</h3>
            </div>
            <div className="TrimesterDesc">
              <p>
              <b>Breakfast</b>
                <ul>
                  <li>Moong dal dosa or pesarattu (made from green gram) with coconut chutney</li>
                  <li>A small bowl of curd (yogurt) with sliced cucumber</li>
                  {/* <li>Coconut chutney</li> 
                </ul>
                <br/>
              <b>Min-Morning Snacks</b>
                <ul>
                  <li>A small serving of fresh papaya or guava</li>
                </ul>
                <br/>
                <b>Lunch</b>      
                <ul>
                  <li>Brown rice or millet (like foxtail millet)</li>
                  <li>Spinach and lentil curry (keerai kuzhambu)</li>
                  <li>A side of sliced tomatoes</li>
                  <li>Cucumber raita</li>
                </ul>
                <br/>
                <b>Afternoon Snack</b>                
                <ul>
                  <li>Buttermilk with a pinch of roasted cumin powder</li>
                </ul>
                <br/>
                <b>Dinner</b>       
                <ul>
                  <li>Grilled or baked fish (if desired) or paneer (cottage cheese) for vegetarians</li>
                  <li>Quinoa or brown rice</li>
                  <li>Mixed vegetable curry (korma) with minimal oil</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div>
            <div className="TrimesterTitle">
              <h3>Dietery Guidelines</h3>
            </div>
            <div className="TrimesterDesc">
              <p>
                <ul>
                  <li>Balanced Macronutrients: Ensure that your meals have a balance of carbohydrates, proteins, and healthy fats to help stabilize blood sugar levels.</li>
                  <li>Fiber-rich Foods: Include plenty of fiber in your diet to help control blood sugar and cholesterol levels. Foods like whole grains, vegetables, and legumes are excellent choices.</li>
                  <li>Portion Control: Be mindful of portion sizes to avoid overeating, which can lead to fluctuations in blood sugar levels.</li>
                  <li>Regular Meals: Eat regularly scheduled meals and snacks to maintain steady blood glucose levels.</li>
                  <li>Hydration: Stay well-hydrated by drinking plenty of water throughout the day.</li>
                  <li>Low-Glycemic Carbohydrates: Choose complex carbohydrates with a low glycemic index (GI) to help control blood sugar. Examples include whole grains, quinoa, sweet potatoes, and legumes.</li>
                </ul>
              </p>
            </div>
          </div>
        </TabPanel> */}
      </TabContext>
    </Box>)}
    </>
    
  );
}
