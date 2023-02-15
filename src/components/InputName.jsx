import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';

const InputName = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate();
    const clickButton = () => {
        dispatch(changeUserName(inputValue))
        navigate("/pokedex")
    }
    return (
        <div className='container-info'>
            <div className='input_pokedex'>
                <div className='container_trainer'>
                    <div className='container_trainer'>
                        <b>
                            <p>Hello Trainer!</p>
                        </b>
                    </div>


                    <div className='input_pokedex_container'>
                        <img className='img' src="https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20161212021454/Entrenadores_guays_SL.png" alt="pikachu y achu" />
                    </div>
                </div>
                <p>Give me your name to start</p>
                <div className='container-input'>
                    <label className='label' htmlFor="input">
                        <input
                            className='inputtrainer'
                            id='input'
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                        <button className='buttom' onClick={clickButton}><i className='bx bxl-telegram'></i></button>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default InputName;