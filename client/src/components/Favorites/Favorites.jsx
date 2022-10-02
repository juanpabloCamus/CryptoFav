import { CryptoCard } from '../CryptoCard/CryptoCard';
import './Favorites.css'

function Favorites({
    favorites,
    setFavorites,
    openCryptoCard,
    detail,
    setDetail 
}) 
{
    
    if(favorites.length === 0) return <h1>No hay favoritas</h1>
    
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