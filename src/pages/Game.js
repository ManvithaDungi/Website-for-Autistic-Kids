import React, { useState, useEffect, useContext } from 'react';
import SafeOrUnsafe from '../components/SafeOrUnsafe'; // Component imported, props will be passed
import FeedbackBox from '../components/FeedbackBox';   // Component imported, props will be passed
import items from '../data/safeItems';                 // Array of game items
import { GameContext } from '../GameContext';         // React Context for global game state
import "../pages/Game.css"                              // CSS import for styling

// Import pet images
import petHappyGif from '../images/pet-happy.gif';
import petExcited from '../images/pet-excited.jpg';
import petHappy from '../images/pet-happy.jpg';
import petPeaceful from '../images/pet-peaceful.jpg';
import petSad from '../images/pet-sad.jpg';
import petShocked from '../images/pet-shocked.jpg';
import petNeutral from '../images/pet-neutral.jpg';

// Shuffle items function (utility function, not React-specific)
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Game() {
  // useContext: accessing global game state functions and variables
  const { updateScore, feedback, giveFeedback } = useContext(GameContext);

  // useState: managing local component state
  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [petMood, setPetMood] = useState("neutral"); 
  const [allCorrect, setAllCorrect] = useState(true);

  // useEffect: shuffle items and preload images on first render
  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    items.forEach(item => new Image().src = item.image); // Preload item images
  }, []); // Empty dependency array -> runs only once

  // Event handler: called when user selects "Safe" or "Unsafe"
  const handleAnswer = (userChoice) => {
    if (isAnswered) return; // Prevent multiple answers

    const currentItem = shuffledItems[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe;

    if (isCorrect) {
      updateScore(1); // Using context function to update score
      setPetMood(currentItemIndex % 2 === 0 ? "excited" : "happy"); // Update pet mood
      giveFeedback("You did it! 🎉 Your pet is happy!"); // ✅ Using context function to show feedback
    } else {
      setPetMood("sad");
      giveFeedback("Oops! Your pet looks a little sad. 😔");
      setAllCorrect(false); // Track if all answers were correct
    }

    setIsAnswered(true); // Prevent multiple answers

    // setTimeout: move to next question after 2.5 seconds
    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < shuffledItems.length) {
        setCurrentItemIndex(nextItemIndex); // Update state to next question
        setIsAnswered(false);
        setPetMood("neutral");
        giveFeedback(""); // Clear feedback
      } else {
        setIsGameFinished(true); // Conditional rendering will show game over screen
      }
    }, 2500);
  };

  // Event handler: reset game state for "Play Again"
  const handlePlayAgain = () => {
    setShuffledItems(shuffleArray(items)); // Reset items
    setCurrentItemIndex(0);
    setIsGameFinished(false);
    setIsAnswered(false);
    setPetMood("neutral");
    setAllCorrect(true);
    giveFeedback(""); // Clear feedback
  };

  // Helper function: returns appropriate pet image based on mood
  const getPetImage = () => {
    if (isGameFinished && allCorrect) return petHappyGif;
    switch (petMood) {
      case "excited": return petExcited;
      case "happy": return petHappy;
      case "peaceful": return petPeaceful;
      case "sad": return petSad;
      case "shocked": return petShocked;
      default: return petNeutral;
    }
  };

  // Helper function: returns appropriate pet status text
  const getPetStatus = () => {
    if (isGameFinished && allCorrect) return "Your pet is overjoyed! 🎉";
    switch (petMood) {
      case "excited": return "Your pet is excited! 😃";
      case "happy": return "Your pet is smiling! 😊";
      case "peaceful": return "Your pet feels calm. 🌿";
      case "sad": return "Your pet looks a little down. 😔";
      case "shocked": return "Your pet is surprised! 😲";
      default: return "Your pet is waiting for you! 🐾";
    }
  };

  // Conditional rendering: show loading if items are not ready
  if (shuffledItems.length === 0) return <div className="page-content">Loading game...</div>;

  return (
    <div className="game-container">
      {/* Game header */}
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <div className="progress">
          Question {currentItemIndex + 1} of {shuffledItems.length}
        </div>
      </div>

      {/* Pet icon: state-based rendering */}
      <div className="pet-container">
        <img src={getPetImage()} alt="Pet" className="pet-avatar" />
        <p className="pet-status">{getPetStatus()}</p>
      </div>

      {/* SafeOrUnsafe component: passing props */}
      <SafeOrUnsafe 
        item={shuffledItems[currentItemIndex]}  //Props: current item
        onAnswer={handleAnswer}                 //Props: event handler
        isAnswered={isAnswered}                 //Props: disable button after answering
      />

      {/* Conditional rendering: show game over screen */}
      {isGameFinished && (
        <div className="game-over-screen card">
          <h2>Great Job!</h2>
          <p>You've completed the game.</p>
          <button className="play-again-btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}

      {/* FeedbackBox component: passing props */}
      {feedback && (
        <FeedbackBox 
          message={feedback} 
          type={petMood === "happy" || petMood === "excited" ? "correct" : "incorrect"} 
        />
      )}
    </div>
  );
}

export default Game;
