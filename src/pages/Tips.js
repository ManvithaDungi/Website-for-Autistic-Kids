// File: src/pages/Tips.js
import React, { useState } from 'react'; // React library and useState hook
import Pagination from '@mui/material/Pagination'; // External component (MUI)
import Stack from '@mui/material/Stack';
import './Tips.css'; // Custom CSS styling

// ---------------- Safety Tips Data ----------------
// Arrays of objects = Static data (used as props in UI rendering)
const safetyTips = [
  { icon: '🚫', text: "Don't touch knives or sharp tools without a grown-up." },
  { icon: '🔥', text: 'Stay away from hot stoves, ovens, and pans.' },
  { icon: '🙋', text: 'If you are ever unsure, always ask an adult for help.' },
  { icon: '🔌', text: "Don't play with electrical outlets or cords." },
  { icon: '🚗', text: 'Always wear your seatbelt when you are in a car.' },
  { icon: '💊', text: "Never take medicine unless a grown-up gives it to you." },
  { icon: '🚲', text: "Always wear a helmet when riding a bike." },
  { icon: '🏊', text: "Don’t swim without adult supervision." }
];

// ---------------- Learning Habits ----------------
const learningHabits = [
  { icon: '📅', text: 'Following a routine: Doing activities in the same order (ex: “First reading, then drawing”).' },
  { icon: '✅', text: 'Task completion: Encouraging them to finish a small activity before moving to the next.' },
  { icon: '🎯', text: 'Focus practice: Starting with short activities (2–5 minutes) and slowly increasing time.' },
  { icon: '📊', text: 'Using visual schedules: Checking off “done” when a task is completed.' },
  { icon: '🪑', text: 'Organizing learning space: Keeping pencils, books, and toys in the same place.' },
  { icon: '🙋', text: 'Asking for help: Raising hand, showing a help card, or using words/signs when stuck.' },
  { icon: '🏆', text: 'Self-monitoring: Teaching to say “I did it!” or marking their own progress.' }
];

// ---------------- Playtime Habits ----------------
const playtimeHabits = [
  { icon: '🔄', text: 'Taking turns: Board games, passing a ball, or turn-taking apps.' },
  { icon: '🤝', text: 'Sharing toys: Practicing “my turn / your turn.”' },
  { icon: '🎭', text: 'Pretend play: Acting out roles (shopkeeper, teacher, doctor) to build imagination.' },
  { icon: '🎲', text: 'Rule-following games: Simple structured games like Simon Says, puzzles, or matching.' },
  { icon: '🎨', text: 'Exploring creativity: Drawing, painting, music, LEGO, or block-building.' },
  { icon: '⚽', text: 'Physical play: Running, climbing, jumping on a trampoline for motor skills.' },
  { icon: '🧩', text: 'Independent play: Learning to play quietly with a puzzle, book, or sensory toy.' },
  { icon: '👫', text: 'Interactive play: Engaging with peers in cooperative activities (building together, team games).' }
];

// ---------------- Special Habit Areas ----------------
const specialHabits = [
  { icon: '🌊', text: 'Sensory-friendly play: Sand, playdough, water beads, or fidget toys.' },
  { icon: '🔢', text: 'Skill-based play: Matching shapes, counting blocks, memory card games.' },
  { icon: '🎵', text: 'Calm-down play: Coloring, music, or listening to a story.' }
];

function Tips() {
  const tipsPerPage = 3; // Variable to control number of items per page

  // ---------------- React State (useState hook) ----------------
  // Each section has its own state for current page number
  const [pageSafety, setPageSafety] = useState(1);
  const [pageLearning, setPageLearning] = useState(1);
  const [pagePlaytime, setPagePlaytime] = useState(1);
  const [pageSpecial, setPageSpecial] = useState(1);

  // ---------------- Helper function ----------------
  // Pagination logic = slices the data array depending on current page
  const paginate = (data, page) => {
    const last = page * tipsPerPage;
    const first = last - tipsPerPage;
    return data.slice(first, last); // returns only the items to display
  };

  return (
    <div>
      {/* ---------------- Safety Tips Section ---------------- */}
      <h2 style={{ marginBottom: '0.5rem' }}>Daily Safety Tips</h2>
      <p className="section-subtitle">Simple rules to stay safe every day</p>

      {/* Mapping through array = list rendering in React */}
      <div className="tips-grid">
        {paginate(safetyTips, pageSafety).map((tip, i) => (
          <div key={i} className="tip-card">
            {/* props used here: tip.icon & tip.text */}
            <div className="tip-icon" aria-label="Safety icon">{tip.icon}</div>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>

      {/* Controlled Component: Pagination (external UI lib) */}
      <Stack spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
        <Pagination
          count={Math.ceil(safetyTips.length / tipsPerPage)} // total pages
          page={pageSafety} // controlled state value
          onChange={(e, val) => setPageSafety(val)} // event handler updating state
          shape="rounded"
        />
      </Stack>

      {/* ---------------- Learning Habits Section ---------------- */}
      <h2 style={{ margin: '3rem 0 0.5rem' }}>Learning Habits</h2>
      <p className="section-subtitle">Helpful routines for learning and focus</p>
      <div className="tips-grid">
        {paginate(learningHabits, pageLearning).map((tip, i) => (
          <div key={i} className="tip-card">
            <div className="tip-icon" aria-label="Learning icon">{tip.icon}</div>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
        <Pagination
          count={Math.ceil(learningHabits.length / tipsPerPage)}
          page={pageLearning}
          onChange={(e, val) => setPageLearning(val)}
          shape="rounded"
        />
      </Stack>

      {/* ---------------- Playtime Habits Section ---------------- */}
      <h2 style={{ margin: '3rem 0 0.5rem' }}>Playtime Habits</h2>
      <p className="section-subtitle">Ways to play, share, and enjoy together</p>
      <div className="tips-grid">
        {paginate(playtimeHabits, pagePlaytime).map((tip, i) => (
          <div key={i} className="tip-card">
            <div className="tip-icon" aria-label="Playtime icon">{tip.icon}</div>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
        <Pagination
          count={Math.ceil(playtimeHabits.length / tipsPerPage)}
          page={pagePlaytime}
          onChange={(e, val) => setPagePlaytime(val)}
          shape="rounded"
        />
      </Stack>

      {/* ---------------- Special Habit Areas Section ---------------- */}
      <h2 style={{ margin: '3rem 0 0.5rem' }}>Special Habit Areas</h2>
      <p className="section-subtitle">Extra activities to calm and build skills</p>
      <div className="tips-grid">
        {paginate(specialHabits, pageSpecial).map((tip, i) => (
          <div key={i} className="tip-card">
            <div className="tip-icon" aria-label="Special habit icon">{tip.icon}</div>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
        <Pagination
          count={Math.ceil(specialHabits.length / tipsPerPage)}
          page={pageSpecial}
          onChange={(e, val) => setPageSpecial(val)}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}

export default Tips; // default export for use in routing
