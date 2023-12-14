import React from 'react';

function MovieButton({ movie }) {
  const { title, overview, poster_path } = movie;

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        style={{ width: '150px', height: '225px' }}
      />
      <h3>{title}</h3>
      <p>{overview}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default MovieButton;