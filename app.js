require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// set .ejs as the view engine
app.set('view engine', 'ejs');

// middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// handle form submission to send email
app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;

// nodemailer configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    
    },

});

    // email content
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: message
    };

    // send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
