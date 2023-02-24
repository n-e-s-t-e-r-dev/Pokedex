import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PoquedexDetails = () => {
    const { id } = useParams();

    const [idPokemon, setIdPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setIdPokemon(res.data))
            .catch(() => alert("ese pokemon no existe"))
    }, [id])

    const colorCard = () => {
        if (idPokemon.types?.[0].type.name === "fire") {
            return "red"
        } else if (idPokemon.types?.[0].type.name === "flying") {
            return "yellowgreen"
        } else if (idPokemon.types?.[0].type.name === "fighting") {
            return "chocolate"
        } else if (idPokemon.types?.[0].type.name === "poison") {
            return "maroon"
        } else if (idPokemon.types?.[0].type.name === "ground") {
            return "grey"
        } else if (idPokemon.types?.[0].type.name === "rock") {
            return "grey"
        } else if (idPokemon.types?.[0].type.name === "bug") {
            return "palevioletred"
        } else if (idPokemon.types?.[0].type.name === "ghost") {
            return "deepskyblue"
        } else if (idPokemon.types?.[0].type.name === "steel") {
            return "wheat"
        } else if (idPokemon.types?.[0].type.name === "water") {
            return "blue"
        } else if (idPokemon.types?.[0].type.name === "grass") {
            return "greenyellow"
        } else if (idPokemon.types?.[0].type.name === "electric") {
            return "darkblue"
        } else if (idPokemon.types?.[0].type.name === "psychic") {
            return "burlywood"
        } else if (idPokemon.types?.[0].type.name === "ice") {
            return "skyblue"
        } else if (idPokemon.types?.[0].type.name === "dragon") {
            return "darcygreen"
        } else if (idPokemon.types?.[0].type.name === "dark") {
            return "peachpuff"
        } else if (idPokemon.types?.[0].type.name === "fairy") {
            return "palevioletred"
        } else if (idPokemon.types?.[0].type.name === "unknown") {
            return "skyblue"
        } else if (idPokemon.types?.[0].type.name === "shadow") {
            return "skyblue"
        }

    }

    const type = () => {
        if (type === "fire") {
            return "fire"
        } else if (type === "normal") {
            return "normal"
        } else if (type === "fighting") {
            return "fighting"
        } else if (type === "flying") {
            return "flying"
        } else if (type === "poison") {
            return "poison"
        } else if (type === "ground") {
            return "ground"
        } else if (type === "rock") {
            return "rock"
        } else if (type === "bug") {
            return "bug"
        } else if (type === "ghost") {
            return "ghost"
        } else if (type === "steel") {
            return "steel"
        } else if (type === "water") {
            return "water"
        } else if (type === "grass") {
            return "grass"
        } else if (type === "electric") {
            return "electric"
        } else if (type === "psychic") {
            return "psychic"
        } else if (type === "ice") {
            return "ice"
        } else if (type === "dragon") {
            return "dragon"
        } else if (type === "dark") {
            return "dark"
        } else if (type === "fairy") {
            return "fairy"
        } else if (type === "unknown") {
            return "unknown"
        } else if (type === "shadow") {
            return "shadow"
        } else {
            return idPokemon.types?.[0].type.name
        }
    }
    const noType = () => {
        if (idPokemon.types?.[1].type.name === "fire") {
            return idPokemon.types?.[1].type.name
        } else {
            return idPokemon.types?.[0].type.name
        }
    }
    const hp = (idPokemon.stats?.[0].base_stat / 150) * 100
    const attack = (idPokemon.stats?.[1].base_stat / 150) * 100
    const defense = (idPokemon.stats?.[2].base_stat / 150) * 100
    const speed = (idPokemon.stats?.[5].base_stat / 150) * 100
    console.log(idPokemon)
    return (
        <div className='container-5'>
            <div className='container-pokedex'>
                <section className='section-details'>
                    <div className='pokedex-datail' style={{ backgroundColor: colorCard() }}>
                        <div className='img-pokemonDetail'>
                            <img className='img-float' src={idPokemon.sprites?.other.dream_world.front_default} alt="pokemon" />
                        </div>

                        <div className='pokemon-datails'>
                            <div className='weight'>
                                <h3>{idPokemon.weight}</h3>
                                <h3>weight</h3>
                            </div>
                            <div>
                                <h2>{idPokemon.name}</h2>
                                <h4>Id: {idPokemon.id}</h4>
                            </div>
                            <div className='height'>
                                <h3>{idPokemon.height}</h3>
                                <h3>height</h3>
                            </div>
                        </div>
                    </div>
                    <div className='container-description'>
                        <div className='container-type'>
                            <h2>Type</h2>
                            <div className='container-type-info'>
                                <div className='type-info'>
                                    <p>{idPokemon.types?.[0].type.name}</p>
                                </div>
                                <div className='type-info'>
                                    <p>{idPokemon.types?.[1]?.type.name || idPokemon.types?.[0]?.type.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className='container-abilities'>
                            <h2>Abilities</h2>
                            <div className='abilities-container'>
                                <div className='abilities-one'>
                                    <div><p>{idPokemon.abilities?.[0].ability.name}</p></div>
                                </div>
                                <div className='abilities-two'>
                                    <div><p>{idPokemon.abilities?.[1]?.ability.name}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-bar'>
                        <h3>Stats</h3>
                        <div className='container-info'>
                            <div className='container-items'>
                                <div className='item'>
                                    <p>HP</p>
                                    <p>{idPokemon.stats?.[0].base_stat}</p>
                                </div>
                                <div className='bar'>
                                    150
                                    <div className='bar-calc' style={{ width: `${hp}%` }}></div>
                                </div>
                                <div className='item'>
                                    <p>Attack</p>
                                    <p>{idPokemon.stats?.[1].base_stat}</p>
                                </div>
                                <div className='bar'>
                                    150
                                    <div className='bar-calc' style={{ width: `${attack}%` }}></div>
                                </div>
                                <div className='item'>
                                    <p>Defense</p>
                                    <p>{idPokemon.stats?.[2].base_stat}</p>
                                </div>
                                <div className='bar'>
                                    150
                                    <div className='bar-calc' style={{ width: `${defense}%` }}></div>
                                </div>
                                <div className='item'>
                                    <p>Speed</p>
                                    <p>{idPokemon.stats?.[5].base_stat}</p>
                                </div>
                                <div className='bar'>
                                    150
                                    <div className='bar-calc' style={{ width: `${speed}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container-Movements'>
                    <div className='encounters'>
                        <h3>Encounters</h3>
                    </div>
                    <div className='movements'>
                        {idPokemon.moves?.map((item, i) => (
                            <p key={i}>{item.move.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PoquedexDetails;