//This page handles state management and rendering of Avatar Character List as well as the toggle of theme and the changing of pages.
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/Airbender.jsx';
import Characters from '../components/Characters';
import Header from '../components/Header';


const CharacterList = () => {

  const [page, setPage] = useState(10);
  const [characters, setCharacters] = useState([10]);

  useEffect(() => {
    fetchCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));

  }, [page]);

  // const Theme = 

  const changePage = by => setPage(prevPage => prevPage + by);
  return (
    <>
      <button onClick={() => changePage({ type: 'increment' })} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage({ type: 'decrement' })} disabled={characters.length < 10}>&gt;</button>
      <Header/>
      <Characters characters={characters} />
    </>
  );
};
export default CharacterList;
