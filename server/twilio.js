const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
import twilio from 'twilio';
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Your Appointment has been confirmed at 8am on 05th March 2023',
    from: 'whatsapp:+14155238886', // From a valid Twilio number
    to: 'whatsapp:+917798283084' // Text your number 917506453051 917718099523 917798283084 917304217832
  })
  .then((message) => console.log(message.sid));