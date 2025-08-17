const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendSummaryEmail = async (recipients, subject, summary) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join(','),
    subject: subject || 'Meeting Summary',
    text: summary,
    html: `<pre>${summary}</pre>`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendSummaryEmail };