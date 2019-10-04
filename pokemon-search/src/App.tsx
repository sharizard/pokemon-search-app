import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

interface IPokemonResponse {
  name: string;
  sprites: {
    front_default: string;
  }
};

const App: React.FC = () => {
  const [result, setResult] = useState<IPokemonResponse | undefined>(undefined);
  const [error, setError] = useState('');

  const handleError = (error: any) => {
    console.error(error);
    setResult(undefined);
    setError("Pokemon not found");
  };

  const fetchPokemon = (name: string) => {
    if (!name) return;

    axios(`${POKEMON_URL}/${name.toLowerCase()}`)
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setResult(data.data)
        }
      })
      .catch((error) => handleError(error));
  };

  const submit = (event: any) => {
    if (event && event.target) {
      setError('');
      fetchPokemon(event.target.value);
    }
  };

  return (
    <>
      <h1>Search for pokemon</h1>
      <input type="text" name="Pokemon" onBlur={submit} />
      {error && <p className="">{error}</p>}
      {result &&
        <div className="card">
          <img className="card-img-top" src={result.sprites.front_default} alt="Pokemon" />
          <div className="body">
            <h4 className="card-title">
              {result.name}
            </h4>
          </div>
        </div>
      }
    </>
  );
}

export default App;
