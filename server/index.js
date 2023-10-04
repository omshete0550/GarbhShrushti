import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import patientsRoute from "./routes/patients.js"
import doctorsRoute from "./routes/doctor.js"
import appointmentsRoute from "./routes/appointment.js"
import cookieParser from "cookie-parser";
import cors from "cors";
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
app.use("/api/doctors", doctorsRoute)
app.use("/api/appointments", appointmentsRoute)

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