const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');


// Start the server
const app = express();
const PORT = process.env.PORT || 3000; // 5000?
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Set up session
app.use(
  session({
    secret: '5744',
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: '83462729097-b6itqhahbjgjugbskefr174o82a0s4v9.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback', // Adjust the URL based on your setup
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user to your database here
      return done(null, profile);
    }
  )
);

// Serialize user information into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Google OAuth routes
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' }),
  (req, res) => {
    // Redirect to the home page after successful login
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Your other routes and middleware can go here
