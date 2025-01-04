import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed Switch
import Profile from "./components/Profile";
import JournalPage from "./components/JournalPage";
import BottomNavBar from "./components/BottomNavBar";

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4">
          <ul className="flex  space-x-6">
            <h1>Logo</h1>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/journal">Journal</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
