import React, { useState } from 'react';
import MovieList from './Movielist';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to obtain information.',
      posterURL: 'https://images.theconversation.com/files/353517/original/file-20200819-14-1n1gtu5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=424&fit=crop&dpr=1',
      rating: 8.8,
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
      rating: 9.3,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filters) => {
    let filtered = [...movies];
    if (filters.title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }
    if (filters.rating) {
      filtered = filtered.filter(movie => movie.rating >= filters.rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
