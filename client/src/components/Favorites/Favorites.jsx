import { useEffect } from 'react';
import { CryptoCard } from '../CryptoCard/CryptoCard';
import './Favorites.css'

function Favorites({
    favorites,
    setFavorites,
    openCryptoCard,
    detail,
    setDetail 
}) {
    
    useEffect(()=>{
        let currentFavs = JSON.parse(localStorage.getItem('Favorites'));
        currentFavs ? setFavorites(currentFavs) : console.log('object');
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
                        price={f.prices['USD']}
                        setFavorites={setFavorites}
                        favorites = {favorites}
                        openDetail = {openCryptoCard}
                        detail = {detail}
                        setDetail = {setDetail}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;