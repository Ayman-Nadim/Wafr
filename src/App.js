import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ApplicationPage from './pages/ApplicationPage';

function App() {
  return (
    <Router> {/* Wrap the routes inside the Router */}
      <div className="App">
        {/* <LandingPage/> */}
        {/* The routes should be defined inside the Router */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ApplicationPage" element={<ApplicationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
