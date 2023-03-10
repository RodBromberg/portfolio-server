"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendSms = (phone, message) => {
    const client = require('twilio')(accountSid, authToken);
    client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.REDIRECT_PHONE_NUMBER,
    })
        .then((message) => console.log(message.sid));
};
exports.sendSms = sendSms;
