'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🎥 Movies from MongoDB</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}

