// Discover.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Discoverstyle.css'

function Discover() {
  return (
    <div className="discover-container">
      <header>
        <h1>Discover</h1>
      </header>
      <section>
        <p>Explore movies based on your preferences.</p>
        <Link to="/questionnaire">
          <button>Search Now</button>
        </Link>
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