import express, { Request, Response } from 'express'
import cors from 'cors'
import { sendSms } from './sendSms'

const app = express();
app.use(express.json())
app.use(cors())
// port 

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({
    msg: 'Does this work?'
  })
})

app.get('/content', (req: Request, res: Response) => {
  res.status(201).send({
    msg: 'Success'
  })
})

app.get('/text', async (req: Request, res: Response) => {
  res.status(201).send({
      message: 'HEEEEELPPPPP'
  })
})

app.post('/text', async (req: Request, res: Response) => {
    const { name, phone, message } = req.body
    const newMessage = `${message} sent by ${name} at ${phone}`
    sendSms(phone, newMessage)
    res.status(201).send({
        message: newMessage
    })
})

// Create user endpoint

  const PORT = 5000
  app.listen(process.env.PORT || `${PORT}`, () => console.log(`Live at ${PORT}`))