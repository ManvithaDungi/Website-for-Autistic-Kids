// src/components/SafeOrUnsafe.js
import React from 'react';
// props validation - ensuring correct types for props
import PropTypes from 'prop-types'; 
import './SafeOrUnsafe.css';

// stateless component - pure SVG icon component
const SafeIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// stateless component - pure SVG icon component
const UnsafeIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

// stateless functional component - uses props to render UI
function SafeOrUnsafe({ item, onAnswer, isAnswered }) {
  // event handling - onError for image load failure
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/250x250/E6E6FA/7A7D96?text=Image+Unavailable';
    e.target.alt = 'Image not available';
    console.warn(`Image failed to load for item: ${item.name}, attempted src: ${item.image}`);
  };

  return (
    <div className="safety-card" role="region" aria-labelledby={`question-${item.id}`}>
      {/* props - using item data to render image */}
      <img
        src={item.image}
        alt={item.name}
        className="safety-image"
        onError={handleImageError} // event handling - image error
        loading="lazy"
      />
      {/* props - rendering question text */}
      <h3 id={`question-${item.id}`} className="safety-question">{item.question}</h3>
      <div className="safety-buttons">
        {/* event handling - onClick calls onAnswer(true) */}
        <button
          className="btn btn-safe"
          onClick={() => onAnswer(true)}
          disabled={isAnswered} // conditional rendering - disables button when answered
          aria-label="Mark as safe"
        >
          <SafeIcon /> Safe
        </button>
        {/* event handling - onClick calls onAnswer(false) */}
        <button
          className="btn btn-unsafe"
          onClick={() => onAnswer(false)}
          disabled={isAnswered} // conditional rendering - disables button when answered
          aria-label="Mark as unsafe"
        >
          <UnsafeIcon /> Unsafe
        </button>
      </div>
    </div>
  );
}

// props validation - defines expected types and shapes
SafeOrUnsafe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default SafeOrUnsafe;
//src/components/SafeOrUnsafe.js