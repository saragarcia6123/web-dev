import React, { useState, useRef, useEffect } from 'react';

const CharCountInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const textareaRef = useRef(null);
  const maxChars = 500;

  useEffect(() => {
    if (textareaRef.current) {
      // Set the textarea height to fit its content
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxChars) {
      setInputValue(value);
    }
  };

  const isMaxCharsReached = inputValue.length >= maxChars;

  return (
    <div className='count-input' style={{ position: 'relative' }}>
      <textarea
        ref={textareaRef}
        className='form-input input-box'
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxChars}
        style={{
          fontSize: '1.2em',
          borderColor: isMaxCharsReached ? 'red' : '',
          height: textareaHeight,
          resize: 'none',
          overflowY: 'hidden',
          whiteSpace: 'pre-wrap',
          position: 'relative',
          paddingBottom: '.6em', // Extra space for character count
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15px', // Adjust as needed
          right: '5px', // Adjust as needed
          color: isMaxCharsReached ? 'red' : 'black',
        }}
      >
        {inputValue.length}/{maxChars}
      </div>
    </div>
  );
};

export default CharCountInput;