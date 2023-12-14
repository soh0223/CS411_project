// Question.js
// renders individual questions

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './questionStyles.css';

function Question({ question, options, handleResponse, goToPrevious, goToNext }) {
  const inputRef = useRef(null);

  const handleNext = (e) => {
    e.preventDefault();
    const selectedValue = inputRef.current.value;
    handleResponse(selectedValue, e);
    goToNext();
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <select ref={inputRef} onChange={(e) => { }}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="navigation-buttons">
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={(e) => handleNext(e)}>Next</button>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleResponse: PropTypes.func.isRequired,
  goToPrevious: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
};

export default Question;