import React from 'react';
// routing - import routing components for navigation
import { Link, NavLink } from 'react-router-dom'; 
import './Navbar.css';

// stateless component - pure function that renders SVG logo
const Logo = () => (
  <svg className="navbar-logo" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG graphics for custom logo */}
    <path d="M22 3C22 3 35 8 35 8V20C35 29.5 30 37.5 22 41C14 37.5 9 29.5 9 20V8C9 8 22 3 22 3Z" 
      fill="#4F46E5" stroke="#3730A3" strokeWidth="1" />
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#6366F1" }} />
        <stop offset="50%" style={{ stopColor: "#8B5CF6" }} />
        <stop offset="100%" style={{ stopColor: "#A855F7" }} />
      </linearGradient>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FEF08A" }} />
        <stop offset="100%" style={{ stopColor: "#FDE047" }} />
      </linearGradient>
    </defs>
    <path d="M22 5.5C22 5.5 32 9.5 32 9.5V19.5C32 27.5 28.5 34 22 37.5C15.5 34 12 27.5 12 19.5V9.5C12 9.5 22 5.5 22 5.5Z" 
      fill="url(#shieldGradient)" />
    <path d="M22 14L24.2 18.8L29.5 19.5L25.75 23.2L26.5 28.5L22 26.2L17.5 28.5L18.25 23.2L14.5 19.5L19.8 18.8L22 14Z" 
      fill="url(#starGradient)" stroke="#F59E0B" strokeWidth="0.5" />
    <circle cx="22" cy="21.5" r="1.2" fill="#F97316" />
    <path d="M22 5.5C22 5.5 32 9.5 32 9.5V19.5C32 27.5 28.5 34 22 37.5C15.5 34 12 27.5 12 19.5V9.5C12 9.5 22 5.5 22 5.5Z" 
      fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
    <path d="M16 32C18.5 35 20.2 36.5 22 37.5C23.8 36.5 25.5 35 28 32" 
      stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
  </svg>
);

// stateless functional component - main Navbar
function Navbar() {
  return (
    <header className="navbar">
      {/* accessibility - skip link for screen readers */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      
      {/* routing - Link navigates without page reload */}
      <Link to="/" className="navbar-logo-link" aria-label="Safety Heroes Home">
        <Logo /> {/* component composition - using Logo inside Navbar */}
        <span className="navbar-title">Safety Heroes</span>
      </Link>
      
      {/* routing - NavLink with active class for highlighting */}
      {/* conditional rendering in className - applies 'active' based on isActive */}
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/game" className={({ isActive }) => isActive ? "active" : ""}>
          Game
        </NavLink>
        <NavLink to="/tips" className={({ isActive }) => isActive ? "active" : ""}>
          Tips
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
// src/components/Navbar.js