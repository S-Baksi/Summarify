const { sendSummaryEmail } = require('../utils/emailService');

const sendEmail = async (req, res) => {
  try {
    const { recipients, subject, summary } = req.body;
    
    if (!recipients || !summary) {
      return res.status(400).json({ error: 'Recipients and summary are required' });
    }

    await sendSummaryEmail(recipients, subject, summary);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };