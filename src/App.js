import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import BottomNavigationBar from "./components/BottomNavBar"; // Import the BottomNavigationBar component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/profile"
            element={
              <Profile
                image="/assets/profile.jpg"
                name="david"
                bio="this is the bio for my app "
              />
            }
          />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <BottomNavigationBar />
      </div>
    </Router>
  );
}

export default App;
