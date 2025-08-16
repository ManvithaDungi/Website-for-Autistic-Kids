// src/pages/SafetyStories.js
import React from 'react';

function SafetyStories() {
  const stories = [
    {
      title: "The Stranger at the Park",
      content:
        "One day, Riya was playing in the park when a stranger offered her a toy. She remembered her parents' advice and walked away to find her teacher. She stayed safe and got a big thumbs up from her mom!"
    },
    {
      title: "Knock at the Door",
      content:
        "Sam was home alone when someone knocked at the door. He didn’t open it and called his mom instead. She was so proud that Sam remembered the safety rule!"
    },
    {
      title: "Crossing the Road",
      content:
        "Ananya looked both ways before crossing the street with her dad. She held his hand tightly and waited for the green signal. Safe steps every time!"
    }
  ];

  return (
    <div className="safety-stories-container">
      <h2>Safety Stories</h2>
      <p className="intro">Let’s learn how other kids stayed safe!</p>
      <div className="story-list">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SafetyStories;
