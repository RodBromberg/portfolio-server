require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const sendSms = (phone: any, message: any) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages.create({
       body: message,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: process.env.REDIRECT_PHONE_NUMBER,
     })
    .then((message: any) => console.log(message.sid));
}
