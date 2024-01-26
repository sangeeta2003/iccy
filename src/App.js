// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About';
import Menu from './components/Menu';
import Service from './components/Service';

const App = () => {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/*" element={<ServicesRouter />} />
        </Routes>
      </Router>
    
  );
};

const ServicesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default App;
