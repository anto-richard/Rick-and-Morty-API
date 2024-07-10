// src/components/CharacterList.js
import React from 'react';
import { useQuery } from 'react-query';
import { fetchCharacters } from '../api/rickAndMortyAPI';
import Pagination from './Pagination';
import './CharacterList.css';

const CharacterList = () => {
  const [page, setPage] = React.useState(1);

  const { data, error, isLoading, isError } = useQuery(['characters', page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="character-list-container">
      <h1 className="title">Rick and Morty</h1>
      <div className="character-list">
        {data.results.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <h2>{character.name}</h2>
              <p>{character.status} - {character.species}</p>
              <p>Last seen on<br />{character.location.name}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} hasNextPage={!!data.info.next} />
    </div>
  );
};

export default CharacterList;
