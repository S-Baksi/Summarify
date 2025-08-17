require('dotenv').config();
const express = require('express');
const cors = require('cors');
const summarizeRouter = require('./routes/summarizeRoute');
const emailRouter = require('./routes/emailRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/summarize', summarizeRouter);
app.use('/api/email', emailRouter);

// Health check
app.get('/', (req, res) => {
  res.send('AI Meeting Summarizer API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});