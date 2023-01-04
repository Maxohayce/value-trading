import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import { Home, About, Contact, Faqs, Login, Register, Dashboard, Deposit} from './containers';
import { Navbar, Footer } from './components';
import PrivateRoute from './utils/privateRoute';
import Withdraw from './containers/Dashboard/withdraw';
import History from './containers/Dashboard/history';
import Profile from './containers/Dashboard/profile';
import Referral from './containers/Dashboard/referral';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/referral" element={<Referral/>} />
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
