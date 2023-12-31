// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Header from './client/components/common/Header';
import Footer from './client/components/common/Footer';
import './client/styles/Layout.css'

import Home from './client/components/home/Home';
import Discover from './client/components/discover/Discover';
import Questionnaire from './client/components/discover/Questionnaire';
import MovieList from './client/components/discover/MovieList';
import Profile from './client/components/profile/Profile';

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
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/questionnaire/:questionNumber" element={<Questionnaire />} />
            <Route path="/questionnaire/results" element={<MovieList />} />
            {/* <Route path="/login" element={<Login />} /> */}
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
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
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