import { useState } from 'react';
import './App.css';
import Favorites from './components/Favorites/Favorites';
import { Modals } from './components/Modals/Modals';
import Header from './components/Header/Header';
import { useModal } from './hooks/useModal';
import heart from './assets/heart.png'

function App() {

  const currencies = [ 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX', 'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY', 'ZAR', 'RUB' ]
  
  const [favorites, setFavorites] = useState([])
  const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
  const [isOpenSeacrher, openSearcher, closeSearcher] = useModal(false)
  const [detail, setDetail] = useState('')
  const [currency, setCurrency] = useState('USD');

  const handleChange = (e) => {
    setCurrency(e.target.value)
  }
  
  return (
    <div className="App">
      <Header/>
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
        currency = {currency}
      />
      {
        favorites.length === 0 
        ? null 
        :
        <>
          <div className='title-container'>
            <h1 className='favorites-title'>Mis Criptomonedas</h1>
            <img className='heart' src={heart} alt='heart'></img>
          </div>
          <div className='select-container'>
            <span>Moneda: </span>
            <select onChange={handleChange}>
              {
                currencies.map(c => (
                  <option value={c}>{c}</option>
                ))
              }
            </select>
          </div>
        </>
      }
        <Favorites 
          openCryptoCard={openCryptoCard} 
          favorites={favorites} 
          setFavorites={setFavorites}
          detail = {detail}
          setDetail = {setDetail}
          currency = {currency}
        />
        <div className='button-container'>
          <button className='search-button' onClick={openSearcher}>+</button>
        </div>
        <div className='footer-container'>
            <h3>Desarollado por Juan Pablo Camus para 42i</h3>
        </div>
      </div>
  );
}

export default App;
