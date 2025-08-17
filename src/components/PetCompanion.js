// src/components/PetCompanion.js
import React from "react";
import { PetContext } from "../GameContext";

// Import pet images
import petHappyGif from '../images/pet-happy.gif';
import petExcited from '../images/pet-excited.jpg';
import petHappy from '../images/pet-happy.jpg';
import petPeaceful from '../images/pet-peaceful.jpg';
import petSad from '../images/pet-sad.jpg';
import petShocked from '../images/pet-shocked.jpg';
import petNeutral from '../images/pet-neutral.jpg';

// This component displays the pet companion based on the current mood and game state.
class PetCompanion extends React.Component {

  // To consume context in a class component, we assign the context to a static contextType property.
  // This makes the context value available on `this.context`.
  static contextType = PetContext;

  // This method determines which pet image to display based on the context.
  getPetImage = () => {
    // We access context values via `this.context` instead of the useContext hook.
    const { petMood, allCorrect } = this.context;

    if (allCorrect && petMood === "happy") return petHappyGif;
    switch (petMood) {
      case "excited": return petExcited;
      case "happy": return petHappy;
      case "peaceful": return petPeaceful;
      case "sad": return petSad;
      case "shocked": return petShocked;
      default: return petNeutral;
    }
  };

  // This method determines which status message to show.
  getPetStatus = () => {
    const { petMood, allCorrect } = this.context;

    if (allCorrect && petMood === "happy") return "Your pet is overjoyed! 🎉";
    switch (petMood) {
      case "excited": return "Your pet is excited! 😃";
      case "happy": return "Your pet is smiling! 😊";
      case "peaceful": return "Your pet feels calm. 🌿";
      case "sad": return "Your pet looks a little down. 😔";
      case "shocked": return "Your pet is surprised! 😲";
      default: return "Your pet is waiting for you! 🐾";
    }
  };

  // The render method is required for class components and returns the JSX to be rendered.
  render() {
    return (
      <div className="pet-container">
        {/* Helper methods are called with `this.` */}
        <img src={this.getPetImage()} alt="Pet" className="pet-avatar" />
        <p className="pet-status">{this.getPetStatus()}</p>
      </div>
    );
  }
}

export default PetCompanion;
