import { useState } from 'react';
import './App.css';
import { Modals } from './components/Modals/Modals';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [favorites, setFavorites] = useState([])
  console.log(favorites);

  return (
    <div className="App">
      <NavBar/>
      <Modals favorites={favorites} setFavorites={setFavorites}/>
      <h1>Favoritas</h1>
    </div>
  );
}

export default App;
