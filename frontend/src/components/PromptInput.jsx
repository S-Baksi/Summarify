import React from 'react';

const PromptInput = ({ prompt, setPrompt }) => {
  return (
    <div className="prompt-input">
      <h2>Custom Instructions</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter custom instructions for the summary"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default PromptInput;