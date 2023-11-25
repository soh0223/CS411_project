# CS411_project
CS411 Project
Personalized Movie/Show Recommendation App

Overview
This application is designed to help users discover new content based on their preferences and previous viewing history. Great for people who are indecisive or want to discover new content.

Key Features

User Profiles
Users create profiles and store their movie and show preferences, interests, as well as their favorite genres, actors, directors (maybe years/decades as well)
Content recommendations will be customized based on individual preferences

Content Discovery
Use movie and show data from TMDb API to provide library of content
Suggest movies and shows based on user preferences, viewing history, and input interests

Similarity Search
Provides recommendations based on input movies and shows the user enjoyed, with similar themes, genres, or actors

Watchlist and History
Allows users to create watchlist of movies and shows they want to watch
Maintain viewing history to help refine recommendations

Content Details
Provide detailed information about recommended movies and shows (synopsis, cast, crew, trailers, reviews)
YouTube API for trailers

Decoupled Architecture
Front-end: JavaScript
Back-end: Python or Java
Communication via RESTful interface

API Integrations
TMDb API: movie and show data (library)
YouTube API: trailers
Social Media APIs: user authentication
(maybe add feature of nearby theaters showing recommended movies if available — need API)

Requirements
Database: mySQL (user profiles, watch history, bookmarks)
API Integration: TMDb API (movie/show data), YouTube API (trailers), Social Media APIs (user authentication)
Third-Party Authentication: OAuth
Decoupled Architecture: JavaScript (front-end), Python or Java (back-end)
