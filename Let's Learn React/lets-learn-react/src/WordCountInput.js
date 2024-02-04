import React, { useState } from 'react';

const WordCountInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 50;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const words = value.trim().split(/\s+/);
    setWordCount(words.length);
  };

  const isMaxWordsReached = wordCount >= maxWords;

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxWords}
        style={{ borderColor: isMaxWordsReached ? 'red' : '', resize: "none" }}
      />
      <div style={{ color: isMaxWordsReached ? 'red' : '' }}>
        {wordCount}/{maxWords}
      </div>
    </div>
  );
};

export default WordCountInput;
