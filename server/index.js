import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import patientsRoute from "./routes/patients.js"
import childsRoute from "./routes/child.js"
import doctorsRoute from "./routes/doctor.js"
import tasksRoute from "./routes/task.js"
import appointmentsRoute from "./routes/appointment.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from "axios";
import twilio from "twilio"
import Appointment from "./models/Appointment.js";
import bodyParser from "body-parser";
import schedule from "node-schedule";

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
app.use("/api/tasks", tasksRoute)
app.use("/api/doctors", doctorsRoute)
app.use("/api/appointments", appointmentsRoute)
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  console.log(username)
  console.log("hello")
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

// twilio 
const accountSid = 'AC8e37ed01b2f9f6eae2735b5dd7ec5f93';
const authToken = '954b6a0c65e3cb9f487997f3aaa63f09';
const twilioClient = new twilio(accountSid, authToken);
app.use(bodyParser.json());

app.post('/confirm-appointment', (req, res) => {
  console.log(req.body.phone);
  const { phone } = req.body;
  twilioClient.messages
    .create({
      body: 'Your Appointment request has been received. We will get back to you soon.',
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+91${phone}`,
    })
    .then((message) => {
      console.log(`Confirmation message sent to ${phone}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`Error sending confirmation message to ${phone}:`, error);
      res.status(500).send('Error sending confirmation message');
    });
});

app.post('/accept-appointment', (req, res) => {
  const { phoneNumber } = req.body;
  twilioClient.messages
    .create({
      body: 'Your Appointment has been confirmed by the doctor.',
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${phoneNumber}`,
    })
    .then((message) => {
      console.log(`Appointment confirmation sent to ${phoneNumber}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`Error sending appointment confirmation to ${phoneNumber}:`, error);
      res.status(500).send('Error sending appointment confirmation');
    });
});

const sendAppointmentReminders = async () => {
  const currentTime = new Date();
  const appointments = await Appointment.find()
console.log(appointments);
  appointments.forEach((appointment) => {
    const timeDifference = appointment.date - currentTime;
    console.log(timeDifference);
    console.log(appointment.phoneNumber)
    if (timeDifference > 0 && timeDifference <= 30 * 60 * 1000) {
      // Send a reminder 30 minutes before the appointment
      twilioClient.messages
        .create({
          body: 'Your appointment is in 30 minutes. Please be prepared.',
          from: 'whatsapp:+14155238886',
          to: `whatsapp:+91${appointment.phoneNumber}`,
        })
        .then((message) => {
          console.log(`Reminder sent to ${appointment.phoneNumber}`);
        })
        .catch((error) => {
          console.error(`Error sending reminder to ${appointment.phoneNumber}:`, error);
        });
    }
  });
};

// Schedule a job to check for reminders every minute (adjust the schedule as needed)
schedule.scheduleJob('* * * * *', sendAppointmentReminders);


// Replace this with the doctor's WhatsApp number
const doctorWhatsAppNumber = 'whatsapp:+917506453051';

// Endpoint to send an emergency contact message to the doctor
app.post('/emergency-contact', (req, res) => {
  console.log(req.body)
  const { name } = req.body;

  // Send the emergency contact message to the doctor
  twilioClient.messages
    .create({
      body: `Emergency, Kindly Contact the ${name} immediately`,
      from: 'whatsapp:+14155238886',
      to: doctorWhatsAppNumber,
    })
    .then((message) => {
      console.log(`Emergency contact message sent to doctor at ${doctorWhatsAppNumber}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error sending emergency contact message:', error);
      res.status(500).send('Error sending emergency contact message');
    });
});



app.listen(Port, () => {
  connect()
  console.log("Server started on Port " + Port)
})