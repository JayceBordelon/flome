import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Brotherhood from './pages/Brotherhood';
import CommunityService from './pages/CommunityService';
import ProfessionalDevelopment from './pages/ProfessionalDevelopment';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
        <div style={{ paddingTop: '60px' }}> {/* Add padding to ensure content isn't hidden behind the fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brotherhood" element={<Brotherhood />} />
            <Route path="/community-service" element={<CommunityService />} />
            <Route path="/professional-development" element={<ProfessionalDevelopment />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
