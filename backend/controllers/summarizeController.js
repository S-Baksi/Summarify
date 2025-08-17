const { summarizeWithGroq } = require('../services/groqService');
const fs = require('fs');
const path = require('path');

// For text-only processing
const generateSummary = async (req, res) => {
  try {
    const { transcript, prompt } = req.body;
    
    if (!transcript) {
      return res.status(400).json({ error: 'Transcript is required' });
    }

    const summary = await summarizeWithGroq(transcript, prompt);
    res.json({ summary });

  } catch (error) {
    console.error('Error generating summary:', error);
    res.status(500).json({ 
      error: 'Failed to generate summary',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = { generateSummary };