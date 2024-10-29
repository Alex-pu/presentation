// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import LoanForm from './components/LoanForm';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/apply">Apply for Loan</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<LoanForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
