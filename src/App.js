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
import Mainpage from './components/MainPage';
import AccountSettings from './components/AccountSettings';
import Req from './components/Req';
import PickupHistory from './components/PickupHistory';
import Logout from './components/Logout';
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
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/req" element= {<Req />} />
        <Route path= "/pickuphistory" element= {<PickupHistory />} />
        <Route path="/logout" element= {<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;