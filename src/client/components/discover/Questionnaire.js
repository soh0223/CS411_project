// Questionnaire.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUESTIONS } from "./Questions";
import Question from './Question';
import MovieList from './MovieList';

function Questionnaire() {
  const navigate = useNavigate();
  const [userResponses, setUserResponses] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { questionNumber } = useParams();
  const currentQuestionIndex = parseInt(questionNumber, 10) - 1;
  const totalQuestions = QUESTIONS.length;

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      navigate(`/questionnaire/${currentQuestionIndex}`);
    }
  };

  // const fetchMoviesAndNavigate = async () => {
  //   if (Object.keys(userResponses).length === totalQuestions) {
  //     await fetchMovies();
  //     navigate('/questionnaire/results');
  //   }
  // };

  const goToNext = () => {
    const nextQuestionNumber = currentQuestionIndex + 2;

    if (nextQuestionNumber <= totalQuestions) {
      navigate(`/questionnaire/${nextQuestionNumber}`);
    } else if (nextQuestionNumber > totalQuestions) {
      // Navigate to results only if it's the first time exceeding total questions
      // fetchMoviesAndNavigate();
      fetchMovies();
    }
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // useEffect(() => {
  //   // This useEffect will re-render the component when userResponses change
  //   console.log('User responses changed:', userResponses);
  // }, [userResponses]);

  // useEffect(() => {
  //   if (isLastQuestion && Object.keys(userResponses).length === totalQuestions) {
  //     // fetchMoviesAndNavigate();
  //     fetchMovies();
  //   }
  //   // // Fetch movies only if not the last question and all questions are answered
  //   // if (!isLastQuestion && Object.keys(userResponses).length === totalQuestions) {
  //   //   fetchMovies();
  //   // }
  // }, [userResponses, totalQuestions, isLastQuestion]);

  useEffect(() => {
    const fetchAndRenderMovies = async () => {
      if (Object.keys(userResponses).length === totalQuestions) {
        await fetchMovies();
      }
    };

    fetchAndRenderMovies();
  }, [userResponses, totalQuestions]);


  const fetchMovies = async () => {
    const apiKey = '9486f0e9e416e122f74be0649ff418a1';

    // Initialize an empty object to store query parameters
    const queryParams = {};

    // Iterate through userResponses and QUESTIONS to construct query parameters
    QUESTIONS.forEach((question, index) => {
      const response = userResponses[index + 1]; // userResponses is 1-indexed

      switch (question.id) {
        case 1: // Select your favorite genre
          if (response) {
            queryParams['with_genres'] = response.toLowerCase();
          }
          break;

        case 2: // Select your preferred years of release
          if (response) {
            // Convert selected decade into start and end years
            const startYear = parseInt(response, 10);
            const endYear = startYear + 9;

            queryParams['release_date.gte'] = `${startYear}-01-01`;
            queryParams['release_date.lte'] = `${endYear}-12-31`;
          }
          break;

        case 3: // Select your preferred age rating
          if (response) {
            queryParams['certification_country'] = 'US';
            queryParams['certification.lte'] = response;
          }
          break;

        case 4: // Select your preferred runtime range (in minutes)
          if (response) {
            queryParams['with_runtime.lte'] = response;
          }
          break;

        case 5: // Select your preferred minimum rating
          if (response) {
            queryParams['vote_average.gte'] = response;
          }
          break;

        case 6: // Select your preferred theme
          if (response) {
            queryParams['with_keywords'] = response.toLowerCase();
          }
          break;

        // Add additional cases for other questions if needed

        default:
          break;
      }
    });

    try {
      // Convert queryParams object to query string
      const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${queryString}`;

      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error('Error:', response.status);
        return;
      }

      const data = await response.json();

      console.log('API Response:', data);

      if (data.results && data.results.length > 0) {
        setFilteredMovies(data.results);
      } else {
        console.warn('No movies found based on the specified criteria.');
        setFilteredMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setFilteredMovies([]);
    }
  };

  const handleResponse = (response, e) => {
    // Prevent the default behavior of the form element
    e.preventDefault();

    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionIndex + 1]: response,
    }));

    const nextQuestionNumber = currentQuestionIndex + 2;

    if (nextQuestionNumber <= totalQuestions) {
      navigate(`/questionnaire/${nextQuestionNumber}`);
    } else {
      // fetchMoviesAndNavigate();
      fetchMovies();
    }
  };

  if (currentQuestionIndex < 0 || currentQuestionIndex >= totalQuestions) {
    // Handle out-of-bounds index, perhaps redirect to an error page
    return <p>Invalid question index.</p>;
  }

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  if (!currentQuestion) {
    return <p>Question not found.</p>;
  }

  const { text, options } = currentQuestion || {};

  if (!text || !options) {
    // Handle the case where question properties are missing
    return <p>Invalid question properties.</p>;
  }

  const questionOptions = Array.isArray(options) ? options : [];

  console.log('Filtered Movies:', filteredMovies);

  return (
    <div>
      <Question
        question={text}
        options={questionOptions}
        handleResponse={handleResponse}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
      />
      {filteredMovies.length > 0 && (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
}

export default Questionnaire;