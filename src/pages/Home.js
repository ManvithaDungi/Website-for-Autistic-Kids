// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import heroImage from '../images/hero.jpg';
import profileImage from '../images/profile.jpg';

function Home() {
  // Only concepts actually used
  const reactConcepts = [
    { title: "Props", description: "Passed props to components like SafeOrUnsafe and FeedbackBox." },
    { title: "Creating Components with Props", description: "Functional components accept props to display dynamic content." },
    { title: "Props Validation", description: "PropTypes used in SafeOrUnsafe.js and FeedbackBox.js." },
    { title: "Event Management", description: "Click events handled with functions like handleAnswer in Game.js." },
    { title: "State Management", description: "useState manages game state, current question index, and score." },
    { title: "Context API", description: "GameContext shares score, feedback, and selectedItems across components." },
    { title: "Stateless Components", description: "Navbar.js and Tips.js are purely presentational." },
    { title: "Hooks", description: "useState, useEffect, useContext used across the project." },
    { title: "Conditional Rendering", description: "Different UI shown depending on game state (loading, in-progress, or finished)." },
    { title: "Lists & Keys", description: ".map() used for items in SafeOrUnsafe and Tips, with keys for performance." },
    { title: "Routing", description: "react-router-dom used for navigating between pages." },
    { title: "Forms", description: "FeedbackBox has a controlled form input." },
    { title: "Pagination", description: "Tips.js uses MUI Pagination for showing tips." }
  ];

  // References list
  const references = {
    articles: [
      { title: "Web Design for Autism", url: "https://www.unimelb.edu.au/accessibility/web-design-for-autism" },
      { title: "Best Autism Websites", url: "https://webflow.com/made-in-webflow/autism" },
      { title: "Create an Accessible Website — Autism Friendly", url: "https://medium.com/@oksana.iudenkova/create-an-accessible-website-make-it-autism-friendly-db6821c72ed3" }
    ],
    videos: [
      { title: "Designing for Web Accessibility", url: "https://youtu.be/ou8kT9G5ZN4?si=OA4A5UOG0ATBHI8m" },
      { title: "Autism & Neurodiversity Inclusive Design", url: "https://youtu.be/zf-1AeoaiqI?si=LdUoE4QOo_pPbfFV" },
      { title: "How to Design for Autism", url: "https://youtu.be/_F_8s02KuT8?si=YQZakQsVbmdKrYlQ" },
      { title: "Designing Built Environments for Children with Autism", url: "https://youtu.be/K0GiTeQF8T0?si=61VGwjmdr_7-j7ze" },
      { title: "Designing for Neurodiversity", url: "https://youtu.be/3aH--S3r9n4?si=ehZSmQ2WN5PgdeHS" }
    ]
  };

  return (
    <div className="home-container">
      {/* Hero & Profile Section */}
      <section className="hero-profile-section">
        {/* Left Card */}
        <div className="info-card">
          <img src={heroImage} alt="Cartoon safety hero" className="card-image" />
          <h2 className="card-title">Become a Safety Hero!</h2>
          <p className="card-text">Learn all about staying safe in this fun adventure game.</p>
          <Link to="/game">
            <button className="card-button">Start the Game</button>
          </Link>
        </div>

        {/* Right Card */}
        <div className="info-card">
          <img 
            src={profileImage}
            alt="Manvitha Dungi"
            className="card-image"
            onError={(e) => {
              e.target.src = 'https://placehold.co/150x150/F0E6FF/5D6073?text=You';
            }}
          />
          <h3 className="card-title">Manvitha Dungi</h3>
          <p className="card-text">
            Hi, I'm Manvitha, a passionate developer creating fun and accessible web experiences.
          </p>
          <a 
            href="https://manvithadungi.github.io/MyPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            View My Portfolio
          </a>
        </div>
      </section>

      {/* Use Case */}
      <section className="description-card">
        <h2 className="card-title">Use Case</h2>
        <p className="card-text">
          <strong>"Safe or Unsafe"</strong> is an interactive website designed to help children with autism
          learn to identify safe and unsafe situations in a calm, supportive way.
        </p>
      </section>

      {/* React Concepts */}
      <section className="concepts-section">
        <h2 className="section-heading">React Concepts Used</h2>
        <div className="concepts-container">
          {reactConcepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <div className="concept-title">{concept.title}</div>
              <div className="concept-description">{concept.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* References Section */}
      <section className="references-section">
        <h2 className="section-heading">References</h2>
        <div className="references-container">
          <div className="reference-card">
            <h3>Articles</h3>
            <ul>
              {references.articles.map((ref, index) => (
                <li key={index}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="reference-card">
            <h3>Videos</h3>
            <ul>
              {references.videos.map((ref, index) => (
                <li key={index}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
