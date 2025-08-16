

# 🧩 Safe & Fun Learning Website

This project is a React-based interactive website designed for kids (especially children with autism) to learn **safety tips, good habits, learning routines, and playtime skills** in a fun and accessible way.
It includes mini-games, tips, and habit cards with pagination for easy navigation.

---

## 🚀 Features

* **Safety Game**: Kids can practice choosing safe vs unsafe items.
* **Daily Safety Tips**: Simple, paginated tips to learn rules at home and outside.
* **Learning Habits**: Visual schedules, routines, and self-monitoring habits.
* **Playtime Habits**: Turn-taking, sharing, pretend play, and creativity activities.
* **Special Habit Areas**: Sensory-friendly and calming activities.
* **Feedback Box**: Simple form where kids/parents can share responses.
* **Responsive Layout**: Pastel-friendly accessible design with CSS Grid and Flexbox.



## 📘 React Concepts Used

| **Concept**                                | **Additional Information**                                                                                                             |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Props**                                  | Used — Passed props like `item`, `onAnswer`, `isAnswered` to `SafeOrUnsafe`, and `message`, `type` to `FeedbackBox`.                   |
| **Creating Components using Props**        | Used — Functional components (`SafeOrUnsafe.js`, `FeedbackBox.js`) accept props to display dynamic content.                            |
| **Props Validation**                       | Used — `PropTypes` imported in `SafeOrUnsafe.js` and `FeedbackBox.js` to enforce correct prop types.                                   |
| **Constructor**                            | Not Used — All components are functional; no class constructors.                                                                       |
| **Component Lifecycle (Class)**            | Not Used — No `componentDidMount`, `componentDidUpdate`, etc.                                                                          |
| **Event Management**                       | Used — Functions like `handleAnswer` and `handlePlayAgain` in `Game.js` manage click events; `onAnswer` passed down to `SafeOrUnsafe`. |
| **State Management (Local)**               | Used — `useState` manages current question index, score, and feedback messages.                                                        |
| **State Management API**                   | Used — Context API (`GameContext`) shares global state like score, feedback, selected items across components.                         |
| **Stateless Component**                    | Used — Components like `Navbar.js` and some `Tips.js` cards are presentational with no state.                                          |
| **Hooks**                                  | Used — `useState`, `useEffect`, and `useContext`.                                                                                      |
| **State Management using Hooks**           | Used — `useState` controls local state in `Game.js`, `Tips.js`.                                                                        |
| **Component Lifecycle using Hooks**        | Used — `useEffect` in `Game.js` for initializing shuffled items and preloading images.                                                 |
| **Layout**                                 | Used — CSS Grid and Flexbox in `Tips.css` and `App.css`.                                                                               |
| **Pagination**                             | Used — Implemented with `@mui/material/Pagination` in `Tips.js`.                                                                       |
| **Material UI**                            | Used — Pagination component (`Pagination` and `Stack`) from Material UI.                                                               |
| **HTTP Client Programming**                | Not Used — No `fetch` or `axios`.                                                                                                      |
| **Form Programming**                       | Used — Feedback input form in `FeedbackBox.js`.                                                                                        |
| **Controlled and Uncontrolled Components** | Used — Controlled input fields in `FeedbackBox.js`.                                                                                    |
| **Formik**                                 | Not Used.                                                                                                                              |
| **Conditional Rendering**                  | Used — In `Game.js`, conditional UI for loading, playing, and game-over.                                                               |
| **Lists**                                  | Used — `.map()` for tips in `Tips.js` and safe/unsafe items in `SafeOrUnsafe.js`.                                                      |
| **Keys**                                   | Used — Keys added to `.map()` loops (`key={index}`).                                                                                   |
| **Routing**                                | Used — `react-router-dom` with `Routes` and `Route` to navigate between Home, Game, and Tips.                                          |

---

## 🛠️ Tech Stack

* **React.js** (Functional components + Hooks)
* **React Router DOM** (Navigation)
* **Material UI (MUI)** (Pagination, layout)
* **CSS (Flexbox & Grid)** (Pastel-friendly UI styling)
* **PropTypes** (Prop validation)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/safe-fun-learning.git

# Navigate to project folder
cd safe-fun-learning

# Install dependencies
npm install

# Run development server
npm start
```

---

## 🌟 Future Improvements

* Add audio narration for younger kids.
* Introduce user profiles with saved progress.
* Connect to a backend for storing feedback.
* Add more interactive mini-games.

---
