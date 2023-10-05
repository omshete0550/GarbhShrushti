let workTittle = document.getElementById("work");
let breakTittle = document.getElementById("break");
const overlay = document.getElementById('overlay');
localStorage.setItem("timer", JSON.stringify([25, 5]));
let timersettings = JSON.parse(localStorage.getItem("timer"));
console.log(timersettings[0]); //WORKTIME
let workTime = timersettings[0];
let breakTime = timersettings[1];
let noti = document.getElementById("notificationsoundeffect");
let minctr = 25;
// let workTime = 1;
// let breakTime = 1;

let seconds = "00";

window.onload = async () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;
  workTittle.classList.add("active");
  let authToken = localStorage.getItem("authToken");
  if(authToken){
    console.log("verify auth")
    let test = await fetch("http://localhost:5000/verifyToken",{
      headers:{
        Authorization:"Bearer "+authToken
      }
    }).then((res)=>res.json());
    if(test.status == 400){
      loginopen();
    }
    else{
      console.log("auth verified")
      console.log(test.remember)
      if(test.remember === false){
        console.log("remember me false")
        localStorage.removeItem("authToken")
        loginopen();
      }
    }
  }
  else{
    loginopen()
  }
};

function update() {
  timersettings = JSON.parse(localStorage.getItem("timer"));
  console.log(timersettings[0]); //WORKTIME
  workTime = timersettings[0];
  breakTime = timersettings[1];
  // let workTime = 1;
  // let breakTime = 1;
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;
}
let updatetimer = setInterval(update, 1000);

function start() {
  clearInterval(updatetimer);
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;
    seconds = seconds - 1;

    if (seconds == 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes == -1) {
        if (breakCount % 2 == 0) {
          workMinutes = breakMinutes;
          breakCount++;
          workTittle.classList.remove("active");
          breakTittle.classList.add("active");
          // noti.play();
          playnotification();
        } else {
          workMinutes = workTime;
          breakCount++;
          workTittle.classList.add("active");
          breakTittle.classList.remove("active");
          // noti.play();
          playnotification();
        }
      }
      seconds = 59;
    }
  };
  if ((workTime - workMinutes) % 25 == 0) {
    updatestreaks();
  }
  setInterval(timerFunction, 1000);
}

function playnotification() {
  let toggle = localStorage.getItem("notification");
  if (toggle == "on") {
    noti.play();
  }
}

// open settings popup
let settingsbtn = document.getElementById("buttone5");
let settings = document.getElementById("settings");
let loginbtn = document.getElementById("loginbtn");
let login = document.getElementById("login");
let general = document.getElementById("generaltab");
let timer = document.getElementById("timertab");
let notification = document.getElementById("notificationtab");
let profile = document.getElementById("profiletab")
let timerset = document.getElementById("timerset");
let generalset = document.getElementById("generalset");
let notificationset = document.getElementById("notificationset"); 
let profileset = document.getElementById("profileset")//initialsing the buttons

function opensettings() {
  settings.style.visibility = "visible";
  settings.classList.toggle("show");
  settings.classList.remove("hide");
  generalset.setAttribute(
    "style",
    `background-color:white;color: rgba(52,55,83,1);`
  );
  general.style.display = "block";
  timer.style.display = "none";
  notification.style.display = "none";
  profile.style.display = "none"
  timerset.setAttribute("style", `background-color:transparent;color: white;`);
  notificationset.setAttribute(
    "style",
    `background-color:transparent;color: white;`
  );
  profileset.setAttribute("style", `background-color:transparent;color: white;`);
}

//function for login and register popup

async function loginset() {
  let emailinput = document.getElementById("emailinput").value;
  let passwordinput = document.getElementById("passwordinput").value;
  let rememberinput = document.getElementById("rememberme").checked
  // console.log(rememberinput)
  emailinput.value = "";
  passwordinput.value = "";
  let resp = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailinput, password: passwordinput,remember:rememberinput }),
  }).then((res) => res.json());
  console.log(resp)
  console.log(resp.status);
  if (resp.status == 200) {
    // if(rememberinput){
      localStorage.setItem("authToken",resp.authToken)
    // }
    login.style.visibility = "visible";
    overlay.classList.toggle("whiteout");
    login.classList.toggle("show");
    login.classList.remove("hide");
  } else {
    if (resp.status == 201) {
      let emaildiv = document.getElementById("emailinputdiv");
      emaildiv.innerHTML += `<p style="color:red">Wrong Email</p>`;
    } else {
      let passworddiv = document.getElementById("passwordinputdiv");
      passworddiv.innerHTML += `<p style="color:red">Wrong password</p>`;
    }
  }
}

function loginopen(){
  console.log("in loginopen function")
  login.style.visibility = "visible";
  login.classList.toggle("show");
  overlay.classList.toggle("blackout")
  login.classList.remove("hide");
  login.style.display = "flex !important"
}

function registeruser(){
  
}

// close settings popup
function closesettings() {
  // settings.style.visibility = "hidden";
  settings.classList.remove("show");
  settings.classList.toggle("hide");
  // settings.style.visibility = "hidden";
  setTimeout(function () {
    settings.style.visibility = "hidden";
  }, 700);
}

//updating streaks code
let numericday = new Date();
let numericdate = numericday.getDay();
console.log("date is " + numericdate);
if (numericdate == 0) {
  numericdate = 7;
}

const today = new Date().getDay();
console.log("today is" + today);
let streaks = [numericdate, 0, 0, 0, 0, 0, 0, 0];

//function for  sending streaks data
function updatestreaks() {
  streaks[today - 1] += 1;
  localStorage.setItem("streaks", JSON.stringify(streaks));
}

//logout feature
async function logout(){
  console.log("in logout func")
  //openlogin == true means autToken is invalid
  let openlogin = await verifyToken();
  if(openlogin){
    console.log("opening login popup")
    closesettings();
    window.location.reload();
  }
  else{
    closesettings();
    localStorage.removeItem("authToken")
    loginopen()
  }
}

//verify token general function
async function verifyToken(){
  let openlogin
  let authToken = await localStorage.getItem("authToken");
  if(!authToken){
    openlogin = true
    console.log("no auth token")
    return openlogin
  }
  else{
    let test = await fetch("http://localhost:5000/verifyToken",{
      headers:{
        Authorization:"Bearer "+authToken
      }
    }).then((res)=>res.json());
    console.log(test)
    if(test.status == 400){
      openlogin = true
      return openlogin
    }
    else{
      console.log("auth verified")
      console.log(test)
      openlogin = false
      return openlogin
    }
  }
}
