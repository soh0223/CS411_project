// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './client/components/common/Header';
import Footer from './client/components/common/Footer';
import './client/styles/Layout.css'

import Home from './client/components/home/Home';
import Discover from './client/components/discover/Discover';

import Login from './client/components/auth/Login';
import { GoogleLogin } from '@react-oauth/google'; //
// import LoginButton from './client/components/auth/Login';
import LogoutButton from './client/components/home/LogoutButton';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/login"
              element={<Login onLoginStatusChange={handleLoginStatusChange} />}
            />
            <Route
              path="/logout"
              element={<LogoutButton onLoginStatusChange={handleLoginStatusChange} />}
            />
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogoutButton />} /> Add the logout route */}
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );

}
export default App;