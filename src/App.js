// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './client/components/common/Header';
import Footer from './client/components/common/Footer';
import './client/styles/Layout.css'

import Home from './client/components/home/Home';
import Discover from './client/components/discover/Discover';
import Questionnaire from './client/components/discover/Questionnaire';
import MovieList from './client/components/discover/MovieList';

// import Login from './client/components/auth/Login';

function App() {
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
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;