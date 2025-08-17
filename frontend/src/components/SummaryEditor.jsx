import React from 'react';

const SummaryEditor = ({ summary, setSummary }) => {
  return (
    <div className="summary-editor">
      <h2>Generated Summary</h2>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        rows="15"
        cols="80"
      />
    </div>
  );
};

export default SummaryEditor;