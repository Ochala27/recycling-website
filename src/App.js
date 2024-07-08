// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Services from './components/Services';
import RequestPickup from './components/RequestPickup';
import CustomerCare from './components/CustomerCare';
import FAQ from './components/FAQ';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request-pickup" element={<RequestPickup />} />
        <Route path="/customer-care" element={<CustomerCare />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
