const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/send-email', (req, res) => {
  console.log('Received email request:', req.body);

  const { name, email, subject, message } = req.body;

  // Create a transporter with your email provider details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thabisomatsaba96@gmail.com',
      pass: 'ysjqkbfnhvpnfzwo',
    },
  });

  // Setup email data
  const mailOptions = {
    from: 'thabisomatsaba96@gmail.com',
    to: 'Thabisomatsaba96@gmail.com',
    subject: `Contact Form Submission - ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    // Send a response to the client
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});