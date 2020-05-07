//This page handles state management and rendering of Avatar Character List as well as the toggle of theme and the changing of pages.
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/Airbender.jsx';
import Characters from '../components/Characters';
import Header from '../components/Header';
import ReactPaginate from 'react-paginate';


const CharacterList = () => {

  const [page, setPage] = useState();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));

  }, [page]);

  // const Theme => setTheme

  const changePage = pageClick => setPage(prevPage => prevPage + pageClick);
  return (
    <>
      <button handlePageClick={() => changePage({ type: 'increment' })} disabled={page === 1}>&lt;</button>
      <button handlePageClick={() => changePage({ type: 'decrement' })} disabled={characters.length < 10}>&gt;</button>
      <Header/>
      <Characters characters={characters} />
    </>
  );
};
export default CharacterList;
