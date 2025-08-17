// Hooks: useState and useContext are imported from React.
import React, { useState, useContext } from 'react';
// Material UI: Pagination and Stack components are imported from the Material-UI library.
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// State Management API: GameContext and PetContext are used for sharing state across components.
import { GameContext, PetContext } from '../GameContext';
import { safetyTips, learningHabits, playtimeHabits, specialHabits } from '../data/SafetyTips';
// Import the PetCompanion component to use it directly in this page
import PetCompanion from '../components/PetCompanion';
import './Tips.css';

function Tips() {
  const tipsPerPage = 3;
  // Hooks / State Management API: useContext is used to access shared state and functions.
  const { giveFeedback } = useContext(GameContext);
  const { setPetMood } = useContext(PetContext);
  // State Management / State Management using Hooks: useState is used for managing component-level state.
  const [page, setPage] = useState(1);
  const [completedTips, setCompletedTips] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('safety');

  const categories = {
    safety: { data: safetyTips, title: "Daily Safety Tips", subtitle: "Simple rules to stay safe every day", icon: "🛡️" },
    learning: { data: learningHabits, title: "Learning Habits", subtitle: "Build smart study routines", icon: "🧠" },
    playtime: { data: playtimeHabits, title: "Play & Exercise", subtitle: "Stay active and have fun", icon: "🏃‍♂️" },
    special: { data: specialHabits, title: "Special Skills", subtitle: "Advanced safety and life skills", icon: "⭐" }
  };

  const currentCategory = categories[activeCategory];
  const currentData = currentCategory.data || [];

  // Pagination: This function slices the data array to get the items for the current page.
  const paginate = (data, currentPage) => {
    const last = currentPage * tipsPerPage;
    const first = last - tipsPerPage;
    return data.slice(first, last);
  };

  // Event Management: This function handles the click event when a user marks a tip as complete.
  const handleCompleteHabit = (habitText, index) => {
    const tipId = `${activeCategory}-${index}`;
    setCompletedTips(prev => new Set([...prev, tipId]));

    // MODIFICATION: Select a random positive emotion for the pet
    const positiveMoods = ["happy", "excited", "peaceful"];
    const randomMood = positiveMoods[Math.floor(Math.random() * positiveMoods.length)];
    setPetMood(randomMood);

    giveFeedback(`Awesome! You completed "${habitText}". Your pet is so proud! 🐶✨`);
  };

  // Event Management: This function handles the click event for changing categories.
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1); // Reset to first page when changing categories
  };

  return (
    // Layout: The JSX defines the structure and layout of the Tips component.
    <div className="tips-container">
      {/* Header Section */}
      <div className="tips-header">
        <div className="header-content">
          <div className="category-icon">{currentCategory.icon}</div>
          <h2 className="main-title">{currentCategory.title}</h2>
          <p className="section-subtitle">{currentCategory.subtitle}</p>
        </div>
      </div>

      {/* Pet Companion is now rendered here, below the header */}
      <PetCompanion />

      {/* Category Navigation */}
      <div className="category-nav">
        {/* Lists / Keys: The .map() function iterates over an array to render a list of buttons. The 'key' prop is essential for React's rendering performance. */}
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            className={`category-btn ${activeCategory === key ? 'active' : ''}`}
            // Event Management: The onClick handler is attached to each category button.
            onClick={() => handleCategoryChange(key)}
            aria-pressed={activeCategory === key}
          >
            <span className="category-btn-icon">{category.icon}</span>
            <span className="category-btn-text">{category.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(completedTips.size / Object.values(categories).reduce((sum, cat) => sum + (cat.data?.length || 0), 0)) * 100}%`
            }}
          />
        </div>
        <span className="progress-text">
          {completedTips.size} completed • Keep going! 🌟
        </span>
      </div>

      {/* Tips Grid */}
      <div className="tips-grid">
        {/* Lists / Keys: The .map() function is used to render a list of tip cards. 'key' is used for each card. */}
        {paginate(currentData, page).map((tip, i) => {
          const tipIndex = i + ((page - 1) * tipsPerPage);
          const tipId = `${activeCategory}-${tipIndex}`;
          const isCompleted = completedTips.has(tipId);

          return (
            // Keys: The 'key' prop helps React identify which items have changed, are added, or are removed.
            <div key={tipIndex} className={`tip-card ${isCompleted ? 'completed' : ''}`}>
              <div className="tip-icon">{tip.icon}</div>
              <div className="tip-content">
                <p className="tip-text">{tip.text}</p>
                {/* Conditional Rendering: The tip description is only rendered if it exists. */}
                {tip.description && (
                  <p className="tip-description">{tip.description}</p>
                )}
              </div>
              <button
                className={`done-btn ${isCompleted ? 'completed' : ''}`}
                // Event Management: An onClick handler is attached to the completion button.
                onClick={() => handleCompleteHabit(tip.text, tipIndex)}
                disabled={isCompleted}
                aria-label={isCompleted ? 'Completed' : 'Mark as completed'}
              >
                {/* Conditional Rendering: The button's content changes based on whether the tip is completed. */}
                {isCompleted ? (
                  <>
                    <span className="btn-icon">🎉</span>
                    <span>Completed!</span>
                  </>
                ) : (
                  <>
                    <span className="btn-icon">✅</span>
                    <span>I Did This!</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Enhanced Pagination */}
      <div className="pagination-section">
        {/* Material UI: The Stack component from MUI is used for layout. */}
        <Stack spacing={2} alignItems="center">
          {/* Material UI / Pagination: The Pagination component from MUI is used to handle page navigation. */}
          <Pagination
            count={Math.ceil(currentData.length / tipsPerPage)}
            page={page}
            onChange={(e, val) => setPage(val)}
            shape="rounded"
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
          <div className="pagination-info">
            Page {page} of {Math.ceil(currentData.length / tipsPerPage)} •
            {currentData.length} total tips
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Tips;
