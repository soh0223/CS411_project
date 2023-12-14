// Discover.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Discoverstyle.css'

function Discover() {
  const navigate = useNavigate();

  const handleSearchNow = () => {
    // Redirect to the first question in the questionnaire
    navigate('/questionnaire/1');
  };

  return (
    <div className="discover-container">
      <header>
        <h1>Discover</h1>
      </header>
      <section>
        <p>Explore movies based on your preferences.</p>
        <button onClick={handleSearchNow}>Search Now</button>
      </section>
      <section>
        <h2>Instructions</h2>
        <p>Follow the steps to discover personalized movie recommendations:</p>
        <ul>
          <li>Answer the questions in the questionnaire.</li>
          <li>Receive movie suggestions tailored to your preferences.</li>
        </ul>
      </section>
    </div>
  );
}

export default Discover;