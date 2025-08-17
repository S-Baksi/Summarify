import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import PromptInput from '../components/PromptInput';
import SummaryEditor from '../components/SummaryEditor';
import ShareSummary from '../components/ShareSummary';
import Navbar from '../components/Navbar';

const Home = () => {
  const [transcript, setTranscript] = useState('');
  const [prompt, setPrompt] = useState('Summarize in bullet points for executives');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSummary = async () => {
    if (!transcript) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript, prompt })
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h1>AI Meeting Summarizer</h1>
      
      <FileUpload setTranscript={setTranscript} />
      <PromptInput prompt={prompt} setPrompt={setPrompt} />
      
      <button 
        onClick={handleGenerateSummary} 
        disabled={!transcript || isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Summary'}
      </button>
      
      {summary && (
        <>
          <SummaryEditor summary={summary} setSummary={setSummary} />
          <ShareSummary summary={summary} />
        </>
      )}
    </div>
  );
};

export default Home;