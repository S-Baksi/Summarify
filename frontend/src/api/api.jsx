import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const generateSummary = async (transcript, prompt) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/summarize`, {
      transcript,
      prompt
    });
    return response.data.summary;
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
};

export const sendEmail = async (recipients, subject, summary) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/email`, {
      recipients,
      subject,
      summary
    });
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};