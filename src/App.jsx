import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';

//Nav
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
        <div style={{ paddingTop: '45px' }}> {/* Add padding to ensure content isn't hidden behind the fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
