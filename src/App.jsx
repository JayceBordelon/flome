import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';

// Nav
import Navbar from './components/Navbar';

// Components
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Backdrop />
      <div className="pt-16"> {/* Adjust the padding value as needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
