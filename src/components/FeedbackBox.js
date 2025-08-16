// src/components/FeedbackBox.js
import React from 'react';
import PropTypes from 'prop-types'; // props validation

import './FeedbackBox.css';

const FeedbackBox = ({ message, type }) => { 
  // props - destructuring props passed from parent component

  // conditional rendering - render nothing if message is empty
  if (!message?.trim()) {
    return null;
  }

  return (
    <div 
      className={`feedback-box ${type}`} // layout - CSS classes for styling
      role="alert"
      aria-live="polite" // accessibility feature for screen readers
    >
      {/* conditional rendering - icon changes based on prop value */}
      <span className="feedback-icon" aria-hidden="true">
        {type === 'correct' ? '✅' : type === 'incorrect' ? '❌' : ''}
      </span>

      {/* props - displaying prop value */}
      <p className="feedback-message">{message}</p>
    </div>
  );
};

// props validation - ensures correct types and required props
FeedbackBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['correct', 'incorrect', '']).isRequired,
};

export default FeedbackBox; // stateless functional component (no state, hooks, or lifecycle)
