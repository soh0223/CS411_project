//MovieList.js
import React from 'react';

const MovieList = ({ movies }) => {
  console.log('MovieList - movies:', movies);

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  // Slice the first 20 movies
  const displayedMovies = movies.slice(0, 20);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {displayedMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            {/* Add more movie details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(MovieList);
