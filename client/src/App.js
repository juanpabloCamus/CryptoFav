import { useState } from 'react';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import { Modals } from './components/Modals/Modals';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [favorites, setFavorites] = useState([])
  
  return (
    <div className="App">
      <NavBar/>
      <Modals favorites={favorites} setFavorites={setFavorites}/>
      <h1>Favoritas</h1>
      <Favorites favorites={favorites}/>
    </div>
  );
}

export default App;
