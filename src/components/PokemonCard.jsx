import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const colorCard = () => {
        if (pokemon.types?.[0].type.name === "fire") {
            return "red"
        } else if (pokemon.types?.[0].type.name === "flying") {
            return "yellowgreen"
        } else if (pokemon.types?.[0].type.name === "fighting") {
            return "chocolate"
        } else if (pokemon.types?.[0].type.name === "poison") {
            return "maroon"
        } else if (pokemon.types?.[0].type.name === "ground") {
            return "grey"
        } else if (pokemon.types?.[0].type.name === "rock") {
            return "grey"
        } else if (pokemon.types?.[0].type.name === "bug") {
            return "palevioletred"
        } else if (pokemon.types?.[0].type.name === "ghost") {
            return "deepskyblue"
        } else if (pokemon.types?.[0].type.name === "steel") {
            return "wheat"
        } else if (pokemon.types?.[0].type.name === "water") {
            return "blue"
        } else if (pokemon.types?.[0].type.name === "grass") {
            return "greenyellow"
        } else if (pokemon.types?.[0].type.name === "electric") {
            return "darkblue"
        } else if (pokemon.types?.[0].type.name === "psychic") {
            return "burlywood"
        } else if (pokemon.types?.[0].type.name === "ice") {
            return "skyblue"
        } else if (pokemon.types?.[0].type.name === "dragon") {
            return "darcygreen"
        } else if (pokemon.types?.[0].type.name === "dark") {
            return "peachpuff"
        } else if (pokemon.types?.[0].type.name === "fairy") {
            return "palevioletred"
        } else if (pokemon.types?.[0].type.name === "unknown") {
            return "skyblue"
        } else if (pokemon.types?.[0].type.name === "shadow") {
            return "skyblue"
        }

    }


    console.log(pokemon)
    return (
        <div className='col'>
            <div
                style={{ backgroundColor: colorCard() }}
                className='card'
                onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
                <div className="imgcard">
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <b>{pokemon.name}</b>
                <div className="container-types" >
                    <div className='flex'>
                        <b>HP: {pokemon.stats?.[0].base_stat}</b>
                        <b>Attack: {pokemon.stats?.[1].base_stat}</b>
                    </div>
                    <div className='flex'>
                        <b>Defense: {pokemon.stats?.[2].base_stat}</b>
                        <b>Speed: {pokemon.stats?.[5].base_stat}</b>
                    </div>
                    <div className='flex'>
                        <b>Types: {pokemon.types?.[0]?.type.name},{pokemon.types?.[1]?.type.name}</b>
                    </div>



                </div>


            </div>
        </div>

    );
};

export default PokemonCard;