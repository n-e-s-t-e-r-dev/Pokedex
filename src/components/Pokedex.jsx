import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)
    const [pokemons, setPokemons] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279/`)
            .then(res => setPokemons(res.data.results))
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setPokemonType(res.data.results))
    }, [])


    const search = () => {
        navigate(`/pokedex/${inputValue.toLowerCase()}`)
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }


    const [page, setPage] = useState(1)
    const paginateIncrements = 21
    const lastIndex = page * paginateIncrements

    const firtsIndex = lastIndex - paginateIncrements
    const paginepokemon = pokemons.slice(firtsIndex, lastIndex);
    const totalPage = Math.ceil(pokemons.length / paginateIncrements)

    const numbers = [];
    for (let i = page - 3; i <= page + 3; i++) {
        if (i >= page && i <= totalPage) {
            numbers.push(i);
        }
    }

    
    return (
        <div>
            <div className='container-select'>
                <div className='cotainer-welcome'>
                    <div className='container-span'>
                        <p> <span>Welcome {userName}, </span> you can find your favorite pokemon</p>
                    </div>

                    <div className='container-buttom'>
                        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                        <button onClick={search}><i className='bx bx-search-alt'></i></button>
                    </div>
                </div>
                <div>
                    <select className='container-selection' onChange={filterType} name="" id="">Todos los pokemon
                        {pokemonType.map((pokemon) => (
                            <option value={pokemon.url} key={pokemon.url}>
                                {pokemon.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='page-buttom'>
                <button className='page-buttoms-left' onClick={() => setPage(page - 1)} disabled={page === 1} ><i className='bx bx-left-arrow'></i></button>
                {numbers.map((number) => (
                    <button
                        key={number}
                        className="pagination_numbers"
                        onClick={() => setPage(number)}>
                        {number}
                    </button>
                ))}
                <button className='page-buttoms' onClick={() => setPage(page + 1)}><i className='bx bx-right-arrow'></i></button>


            </div>

            <div className='pokemon-list'>

                {paginepokemon.map((pokemon) => (
                    <PokemonCard
                        url={pokemon.url ? pokemon.url : pokemon && pokemon.pokemon.url}
                        key={pokemon.url ? pokemon.url : pokemon && pokemon.pokemon.url} />
                ))}

            </div>

        </div>
    );
};

export default Pokedex;