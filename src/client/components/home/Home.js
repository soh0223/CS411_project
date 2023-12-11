// Home.js
import React from 'react';
// import LoginButton from './LoginButton'; // Assuming you create a LoginButton component
import { Link } from 'react-router-dom';
import './Homestyle.css'; // Import the styling

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1>Your Movie Generator</h1>
          <p>Discover and enjoy movies based on your preferences</p>
          {/* <LoginButton />
          <div className="home-buttons">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div> */}
        </div>
        <div className="home-text">
          <p>
            Text about app. Add more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;