// src/pages/SafetyStories.js
import React from 'react';

// Converted to a class component that extends React.Component
class SafetyStories extends React.Component {
  // The constructor is used to initialize the component's state
  constructor(props) {
    // super(props) must be called before any other statement in a class constructor
    super(props);

    // The 'stories' array is now part of the component's state
    this.state = {
      stories: [
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
      ]
    };
  }

  // The render() method is required for class components and returns the JSX
  render() {
    return (
      <div className="safety-stories-container">
        <h2>Safety Stories</h2>
        <p className="intro">Let’s learn how other kids stayed safe!</p>
        <div className="story-list">
          {/* We access the stories array from the component's state using 'this.state.stories' */}
          {this.state.stories.map((story, index) => (
            <div className="story-card" key={index}>
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SafetyStories;