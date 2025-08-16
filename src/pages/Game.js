/* src/pages/Game.js */
import React, { useState, useEffect, useContext } from 'react'; 
// ✅ Hooks used (useState, useEffect, useContext)

import SafeOrUnsafe from '../components/SafeOrUnsafe';
import FeedbackBox from '../components/FeedbackBox';
// ✅ Creating Components using Props (SafeOrUnsafe and FeedbackBox receive props)

import items from '../data/safeItems';
import { GameContext } from '../GameContext'; 
// ✅ State Management API (Context API used to share score/feedback)

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Game() {
  const { score, updateScore, feedback, giveFeedback } = useContext(GameContext); 
  // ✅ State Management API (consuming context values + functions)

  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  // ✅ State Management using Hooks (useState manages local state)

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    items.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);
  // ✅ Component Lifecycle using Hooks (useEffect used as componentDidMount)

  const handleAnswer = (userChoice) => {
    if (isAnswered) return;

    const currentItem = shuffledItems[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe;

    if (isCorrect) {
      updateScore(1);
      giveFeedback(currentItem.explanation.correct);
    } else {
      giveFeedback(currentItem.explanation.incorrect);
    }

    setIsAnswered(true);

    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < shuffledItems.length) {
        setCurrentItemIndex(nextItemIndex);
        giveFeedback(""); // clear feedback
        setIsAnswered(false);
      } else {
        setIsGameFinished(true);
      }
    }, 2500);
  };
  // ✅ Event Management (handleAnswer handles user interaction)

  const handlePlayAgain = () => {
    setShuffledItems(shuffleArray(items));
    setCurrentItemIndex(0);
    giveFeedback("");
    setIsGameFinished(false);
    setIsAnswered(false);
  };
  // ✅ Event Management (reset game on button click)

  if (shuffledItems.length === 0) {
    return <div className="page-content">Loading game...</div>;
  }
  // ✅ Conditional Rendering (different UI if loading)

  if (isGameFinished) {
    return (
      <div className="game-over-screen card">
        <h2>Great Job!</h2>
        <p>You've completed the game.</p>
        <p className="final-score">Your Final Score: {score} out of {shuffledItems.length}</p>
        <button className="primary-button" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    );
  }
  // ✅ Conditional Rendering (different UI if game finished)

  return (
    <div>
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <p className="score">Score: {score}</p>
      </div>

      <SafeOrUnsafe 
        item={shuffledItems[currentItemIndex]} 
        onAnswer={handleAnswer} 
        isAnswered={isAnswered}
      />
      {/* ✅ Props used (passing data & event handler to child component) */}

      {feedback && (
        <FeedbackBox 
          message={feedback} 
          type={feedback.includes("correct") ? "correct" : "incorrect"} 
        />
      )}
      {/* ✅ Props used + Conditional Rendering */}

      <div className="progress">
        Question {currentItemIndex + 1} of {shuffledItems.length}
      </div>
      {/* ✅ Lists (shuffled array drives questions), Keys not needed here since not mapping */}
    </div>
  );
}

export default Game;
