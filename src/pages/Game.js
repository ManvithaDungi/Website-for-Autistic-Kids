// Hooks: useState, useEffect, and useContext are imported from React.
import React, { useState, useEffect, useContext } from 'react';
// Creating Components using Props: SafeOrUnsafe is a custom component being used.
import SafeOrUnsafe from '../components/SafeOrUnsafe';
// Creating Components using Props: FeedbackBox is another custom component.
import FeedbackBox from '../components/FeedbackBox';
import items from '../data/safeItems';
// State Management API: GameContext and PetContext are used to manage and share state.
import { GameContext, PetContext } from "../GameContext";
import "../pages/Game.css";

// Shuffle items function
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Game() {
  // Hooks / State Management API: useContext is used to consume shared state from Context.
  const { updateScore, feedback, giveFeedback } = useContext(GameContext);
  const { setPetMood, setAllCorrect } = useContext(PetContext);

  // State Management / State Management using Hooks: useState hook is used to manage component state.
  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Hooks / Component Lifecycle using Hooks: useEffect hook runs after the component mounts.
  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    // Preloading images for a smoother experience
    items.forEach(item => new Image().src = item.image);
  }, []); // Empty dependency array means this runs once, similar to componentDidMount.

  // Event Management: This function handles the logic when a user clicks an answer button.
  const handleAnswer = (userChoice) => {
    if (isAnswered) return;

    const currentItem = shuffledItems[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe;

    if (isCorrect) {
      updateScore(1);
      setPetMood(currentItemIndex % 2 === 0 ? "excited" : "happy");
      giveFeedback("You did it! 🎉 Your pet is happy!");
    } else {
      setPetMood("sad");
      giveFeedback("Oops! Your pet looks a little sad. 😔");
      setAllCorrect(false);
    }

    setIsAnswered(true);

    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < shuffledItems.length) {
        setCurrentItemIndex(nextItemIndex);
        setIsAnswered(false);
        setPetMood("neutral");
        giveFeedback("");
      } else {
        setIsGameFinished(true);
      }
    }, 2500);
  };

  // Event Management: This function handles the click event for the "Play Again" button.
  const handlePlayAgain = () => {
    setShuffledItems(shuffleArray(items));
    setCurrentItemIndex(0);
    setIsGameFinished(false);
    setIsAnswered(false);
    setPetMood("neutral");
    setAllCorrect(true);
    giveFeedback("");
  };

  // Conditional Rendering: Displays a loading message until the items are shuffled and ready.
  if (shuffledItems.length === 0) return <div className="page-content">Loading game...</div>;

  return (
    // Layout: The JSX structure defines the layout of the game page.
    <div className="game-container">
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <div className="progress">
          Question {currentItemIndex + 1} of {shuffledItems.length}
        </div>
      </div>

      {/* Creating Components using Props / Props: The SafeOrUnsafe component is rendered with 'item', 'onAnswer', and 'isAnswered' props. */}
      <SafeOrUnsafe
        item={shuffledItems[currentItemIndex]}
        onAnswer={handleAnswer}
        isAnswered={isAnswered}
      />

      {/* Conditional Rendering: The game-over screen is only shown when 'isGameFinished' is true. */}
      {isGameFinished && (
        <div className="game-over-screen card">
          <h2>Great Job!</h2>
          <p>You've completed the game.</p>
          {/* Event Management: The 'onClick' handler is attached to the button. */}
          <button className="play-again-btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}

      {/* Conditional Rendering: The FeedbackBox component is only rendered if there is feedback text. */}
      {feedback && (
        // Creating Components using Props / Props: The FeedbackBox component is rendered with 'message' and 'type' props.
        <FeedbackBox
          message={feedback}
          type={feedback.includes("happy") ? "correct" : "incorrect"}
        />
      )}
    </div>
  );
}

export default Game;