const accountSid = "AC8e37ed01b2f9f6eae2735b5dd7ec5f93";
const authToken = "954b6a0c65e3cb9f487997f3aaa63f09";
import twilio from 'twilio';
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Your Appointment has been confirmed at 8am on 05th March 2023',
    from: 'whatsapp:+14155238886', // From a valid Twilio number
    to: 'whatsapp:+917798283084' // Text your number 917506453051 917718099523 917798283084 917304217832
  })
  .then((message) => console.log(message.sid));