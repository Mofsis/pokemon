import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../App.css';

const Pokemon = ({endpoint}) => {

    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(endpoint);
                console.log(result.data);
                setPokemonData(result.data);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="pokeList">
            {pokemonData &&
            <>
                <h3>{pokemonData.name}</h3>
                <img src={pokemonData.sprites.front_default} alt="jiggly"/>
                <p>Moves: {pokemonData.moves.length}</p>
                <p>Weight: {pokemonData.weight}</p>
                <h5>Abilities:</h5>
                {pokemonData.abilities.map((pokeBility) => {
                    return <li>{pokeBility.ability.name}</li>
                })}
            </>
            }

        </div>
    );
};

export default Pokemon;