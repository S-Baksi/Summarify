import React, { useState } from 'react';

const ShareSummary = ({ summary }) => {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('Meeting Summary');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    if (!recipients || !summary) return;
    
    setIsSending(true);
    try {
      const response = await fetch('http://localhost:5000/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          recipients: recipients.split(',').map(email => email.trim()),
          subject,
          summary 
        })
      });
      const data = await response.json();
      setMessage(data.message || 'Email sent successfully');
    } catch (error) {
      setMessage('Failed to send email');
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="share-summary">
      <h2>Share Summary via Email</h2>
      <input
        type="text"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
        placeholder="Enter recipient emails (comma separated)"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Email subject"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSendEmail} disabled={isSending || !recipients}>
        {isSending ? 'Sending...' : 'Send Email'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ShareSummary;