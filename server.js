const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {    
    console.log(req.body.name, req.body.email, req.body.message);

    const client = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "dev.andreimorogan@gmail.com",
            pass: ";)"
        }
    });
    
    client.sendMail(
        {
            from: "dev.andreimorogan@gmail.com",
            to: "andreymorogan@gmail.com",
            subject: "Sending",
            text: "Hello"
        }
    )
})



app.listen(3001, () => {
    console.log('Alls well!');
});