import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";
import Logo from "./assets/png-clipart-pokemon-logo-pokemon-logo.png"
import {toBeDisabled} from "@testing-library/jest-dom/dist/matchers";

function App() {

  const [pokemonData, setPokemonData] = useState();
  const [endPoint, setEndPoint] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
      async function fetchData() {
          try {
              const result = await axios.get(endPoint);
              console.log(result.data.results);
              setPokemonData(result.data);
          }
          catch (e) {
              console.error(e);
          }
      }
      fetchData();
  }, [endPoint]);

  return (
      <>
      <img src={Logo} width={500} className="logo" alt="logo"/>
      <button

          className="button"
          type="button"
          onClick={() => setEndPoint(pokemonData.previous)}
      >
          Vorige
      </button>
      <button
          className="button"
          type="button"
          onClick={() => setEndPoint(pokemonData.next)}
      >
          Volgende
      </button>
          <div className="pokemon">
          {pokemonData && <>

          {pokemonData.results.map((pokemon) => {
              return(
              <Pokemon key={pokemon.name} endpoint={pokemon.url} />
              )
          }
              )}
          </>}
      </div>
      </>
  );
}

export default App;
