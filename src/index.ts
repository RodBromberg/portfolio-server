import express, { Request, Response } from 'express'
import cors from 'cors'
import { sendSms } from './sendSms'

const app = express();
app.use(express.json())
app.use(cors())
// port 
const PORT = 5000



app.post('/text', async (req: Request, res: Response) => {
    const { name, phone, message } = req.body
    const newMessage = `${message} sent by ${name} at ${phone}`
    sendSms(phone, newMessage)
    res.status(201).send({
        message: newMessage
    })
})

// Create user endpoint
  app.post('/users', (req, res) => {
    const { email, password, phone } = req.body;
    const user = {
      email,
      password,
      phone
    };
    // userDatabase.push(user);  
    // const welcomeMessage = 'Welcome to Chillz! Your verification code is 54875';
    sendSms(user.phone, req.body.message)
  
    res.status(201).send({
      message: req.body.message,
      data: user
    })
  });
  
  app.listen(process.env.PORT || `0.0.0.0:${PORT}`, () => console.log(`Live at ${PORT}`))
















// import express, { Request, Response } from 'express'
// import { sendSms } from './sendSms'
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());


// const userDatabase = [];
// const PORT = 8080

// // Create user endpoint
// app.post('/users', (req, res) => {
//     const { email, password, phone } = req.body;
//     const user = {
//       email,
//       password,
//       phone
//     };
  
//     userDatabase.push(user);
  
//     const welcomeMessage = req.body.message
  
//     sendSms(user.phone, welcomeMessage);

//     res.status(201).send({
//         message: req.body.message,
//     })
  
//     res.status(201).send({
//       message: 'Account created successfully, kindly check your phone to activate your account!',
//       data: user
//     })
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });