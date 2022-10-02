import { useEffect } from 'react';
import { CryptoCard } from '../CryptoCard/CryptoCard';
import './Favorites.css'

function Favorites({
    favorites,
    setFavorites,
    openCryptoCard,
    detail,
    setDetail,
    currency
}) {
    
    useEffect(()=>{
        let currentFavs = JSON.parse(localStorage.getItem('Favorites'));
        currentFavs ? setFavorites(currentFavs) : console.log('');
    }, [])

    if(favorites.length === 0) {
        return (
            <div className='nofavs-container'>
                <p>No has agregado Cryptos aun! Pulsa en '+' y comienza a listarlas!</p>
            </div>
        )
    }
    
    return (
        <div className="favorites-container">
            {
                favorites.map(f => (
                    <CryptoCard
                        context = 'favorites'
                        key={f.ticker}
                        ticker={f.ticker}
                        name={f.coin}
                        logo={f.logo}
                        price={f.prices[currency]}
                        setFavorites={setFavorites}
                        favorites = {favorites}
                        openDetail = {openCryptoCard}
                        detail = {detail}
                        setDetail = {setDetail}
                        currency = {currency}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;