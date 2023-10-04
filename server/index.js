import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import patientsRoute from "./routes/patients.js"
import childsRoute from "./routes/child.js"
import doctorsRoute from "./routes/doctor.js"
import appointmentsRoute from "./routes/appointment.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from "axios";
const Port = 8800

const app = express();
dotenv.config();

//database connection
mongoose.set('strictQuery', true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected")
  } catch (err) {
    throw err
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected")
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/patients", patientsRoute)
app.use("/api/childs", childsRoute)
app.use("/api/doctors", doctorsRoute)
app.use("/api/appointments", appointmentsRoute)
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  console.log(username)
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "PRIVATE-KEY": "c671c7aa-cef2-41de-b4fc-38724bf9c5e0",
        }
      }
    );
    return res.status(200).json(r.data);
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
  //   return res.json({ username: username, secret: "sha256..." });
});


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(Port, () => {
  connect()
  console.log("Server started on Port " + Port)
})