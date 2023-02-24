import { useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import InputName from './components/InputName'
import PokedexDetails from './components/PoquedexDetails'
import ProtectedRoutes from './components/ProtectedRouters'
function App() {

  const [switchMode, setSwitchMode] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const switchOn = () => {
    setSwitchMode(!switchMode);
    setDarkmode(!darkmode);
  };
  let classDark = "";
  if (switchMode == true) {
    classDark = "active";
  }
  return (
    <div
      className={`thm ${darkmode ? "darkmode" : "ligthmode"}`} >
      <HashRouter>
        <button
          onClick={switchOn}
          className={`switch ${classDark}`}
          id="swith">
          <span>
            <i className="bx bx-sun bx-sm"></i>
          </span>
          <span>
            <i className="bx bx-moon bx-sm"></i>
          </span>
        </button>
        <div className='container-swicht'>


        </div>
        <Routes>
          <Route path='/' element={<InputName />}></Route>


          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />}></Route>
            <Route path='/pokedex/:id' element={<PokedexDetails />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
