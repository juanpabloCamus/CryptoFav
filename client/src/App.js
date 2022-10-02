import { useState } from 'react';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import { Modals } from './components/Modals/Modals';
import NavBar from './components/NavBar/NavBar';
import { useModal } from './hooks/useModal';

function App() {

  const [favorites, setFavorites] = useState([])
  const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
  const [isOpenSeacrher, openSearcher, closeSearcher] = useModal(false)
  const [detail, setDetail] = useState('')
  
  return (
    <div className="App">
      <NavBar/>
      <Modals 
        favorites={favorites} 
        setFavorites={setFavorites}
        isOpenCryptoCard = {isOpenCryptoCard}
        openCryptoCard = {openCryptoCard}
        closeCryptoCard = {closeCryptoCard}
        isOpenSeacrher = {isOpenSeacrher}
        openSearcher = {openSearcher}
        closeSearcher = {closeSearcher}
        detail = {detail}
        setDetail = {setDetail}
      />
      <h1 style={{textAlign:'center'}}>Favoritas</h1>
      <Favorites 
        openCryptoCard={openCryptoCard} 
        favorites={favorites} 
        setFavorites={setFavorites}
        detail = {detail}
        setDetail = {setDetail}
      />
      <div className='button-container'>
            <button className='search-button' onClick={openSearcher}>Añadir</button>
      </div>
    </div>
  );
}

export default App;
