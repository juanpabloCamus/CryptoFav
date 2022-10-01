import { useState } from 'react';
import './App.css';
import { Modals } from './components/Modals/Modals';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <NavBar/>
      <Modals/>
      <h1>Favoritas</h1>
    </div>
  );
}

export default App;
