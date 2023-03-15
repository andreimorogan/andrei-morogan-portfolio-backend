const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
require('dotenv').config();
const authToken = process.env.AUTH_TOKEN;
const authUser = process.env.AUTH_USER;
const nodemailer = require('nodemailer');



app.use(cors());
app.use(express.json());

app.post('/submit', (req) => {    

    const client = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: authUser,
            pass: authToken
        }
    });
    
    client.sendMail(
        {
            from: authUser,
            to: authUser,
            subject: `Contact form message from ${req.body.name}`,
            text: `This message was sent from ${req.body.email}
            
            ${req.body.message}`
        }
    )
})


app.listen(port, () => {
    console.log('All\'s well!');
});