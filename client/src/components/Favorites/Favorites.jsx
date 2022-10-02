import { CryptoCard } from '../CryptoCard/CryptoCard';
import './Favorites.css'

function Favorites({favorites}) {
    
    if(favorites.length === 0) return <h1>No hay favs</h1>
    
    return (
        <div className="favorites-container">
            {
                favorites.map(f => (
                    <CryptoCard
                        key={f.ticker}
                        ticker={f.ticker}
                        name={f.coin}
                        logo={f.logo}
                        price={f.prices['USD']}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;