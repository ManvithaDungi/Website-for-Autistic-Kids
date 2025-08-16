// src/AppContext.js

// Hooks used
import React, { createContext, useState } from "react";

// Context API + State Management using Hooks
export const AppContext = createContext();

// Props used (children passed as prop to provider)
const AppProvider = ({ children }) => {
  // State Management using Hooks
  const [score, setScore] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    // Props used (value passed down as props to context consumers)
    <AppContext.Provider value={{ score, setScore, feedbacks, setFeedbacks }}>
      {children} {/* Props used */}
    </AppContext.Provider>
  );
};

export default AppProvider; // Exporting component
