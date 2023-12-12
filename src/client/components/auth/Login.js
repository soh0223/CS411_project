import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


function Login({ onLoginStatusChange }) {

  const navigate = useNavigate();

  const handleLoginSuccess = credentialResponse => {
    console.log(credentialResponse);
    // Update the login status in the parent component
    onLoginStatusChange(true);
    // Redirect to the homepage after successful login
    navigate('/');
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };


  return(
    <div>
      <GoogleOAuthProvider clientId="83462729097-b6itqhahbjgjugbskefr174o82a0s4v9.apps.googleusercontent.com">
        <GoogleLogin  
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>;
    </div>
  );
}

export default Login;