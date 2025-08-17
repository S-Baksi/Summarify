import React from 'react';

const FileUpload = ({ setTranscript }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setTranscript(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleTextChange = (e) => {
    setTranscript(e.target.value);
  };

  return (
    <div className="file-upload">
      <h2>Upload Text File</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        accept=".txt,.md,.text" 
      />
      <p>Or paste text:</p>
      <textarea 
        rows="10" 
        cols="50" 
        placeholder="Paste meeting transcript here..."
        onChange={handleTextChange}
      />
    </div>
  );
};

// Add this export statement
export default FileUpload;