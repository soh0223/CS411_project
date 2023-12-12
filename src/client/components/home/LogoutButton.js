import React from 'react';
import { Link } from 'react-router-dom';

function LogoutButton() {
  // Handle logout logic (e.g., clearing session, redirecting, etc.)
  const handleLogout = () => {
    // Perform logout logic here, e.g., clear session, update state, etc.
    console.log('Logout logic');

    // Redirect to the home page after logout
    window.location.href = '/';
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
