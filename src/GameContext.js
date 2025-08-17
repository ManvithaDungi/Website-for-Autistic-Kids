// src/GameContext.js
// Hooks: createContext and useState are imported from React.
import React, { createContext, useState } from "react";

// State Management API: createContext is used to create context objects for sharing state.
export const GameContext = createContext();
export const PetContext = createContext();

// Creating Components using Props: GameProvider is a component that accepts 'children' as a prop.
export const GameProvider = ({ children }) => {
  // State Management / State Management using Hooks: The useState hook is used to manage state within the provider.
  const [score, setScore] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedback, setFeedback] = useState("");

  // Pet state
  const [petMood, setPetMood] = useState("neutral");
  const [allCorrect, setAllCorrect] = useState(false);

  // Functions that will be exposed via context to manage state
  const addItem = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const updateScore = (points) => {
    setScore((prev) => prev + points);
  };

  const giveFeedback = (message) => {
    setFeedback(message);
  };

  // Wrap contexts inside one root return
  return (
    // State Management API: The Provider component makes the state available to all child components.
    <GameContext.Provider
      // Props: The 'value' prop is used to pass down the state and functions.
      value={{
        score,
        selectedItems,
        feedback,
        addItem,
        updateScore,
        giveFeedback,
      }}
    >
      <PetContext.Provider
        value={{
          petMood,
          setPetMood,
          allCorrect,
          setAllCorrect,
        }}
      >
        {/* Props: The 'children' prop allows any nested components to be rendered here, giving them access to the context. */}
        {children}
      </PetContext.Provider>
    </GameContext.Provider>
  );
};