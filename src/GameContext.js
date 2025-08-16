// src/context/GameContext.js
import React, { createContext, useState } from "react";

// Context API
// -------------------------------------------
// createContext() is part of React Context API. 
// It allows state and functions to be shared globally across components.
export const GameContext = createContext();

// GameProvider is a STATEFUL COMPONENT (uses hooks for state management)
export const GameProvider = ({ children }) => {  // props used: children
  // State Management using Hooks
  // -------------------------------------------
  // useState() hook is used to manage component-level state
  const [score, setScore] = useState(0);                // State: score
  const [selectedItems, setSelectedItems] = useState([]); // State: list of selected items
  const [feedback, setFeedback] = useState("");           // State: feedback message

  // State Management API / Event Management
  // -------------------------------------------
  // Functions to update state act like event handlers
  const addItem = (item) => {
    setSelectedItems((prev) => [...prev, item]); // State update with spread operator
  };

  const updateScore = (points) => {
    setScore((prev) => prev + points); // Increment score
  };

  const giveFeedback = (message) => {
    setFeedback(message); // Update feedback
  };

  // Props + Context Provider
  // -------------------------------------------
  // The `children` prop allows nested components to access context values
  return (
    <GameContext.Provider
      value={{
        score,           // State exposed via Context
        selectedItems,   // State exposed via Context
        feedback,        // State exposed via Context
        addItem,         // Function exposed via Context
        updateScore,     // Function exposed via Context
        giveFeedback,    // Function exposed via Context
      }}
    >
      {/* Conditional Rendering: children are rendered inside the provider */}
      {children} 
    </GameContext.Provider>
  );
};
