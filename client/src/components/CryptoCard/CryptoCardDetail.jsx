import { useEffect, useState } from 'react';
import './CryptoCardDetail.css';
import axios from 'axios';

function CryptoCardDetail({detail, setFavorites, favorites}) {

    const [currentCrypto, setCurrentCrypto] = useState({})
    
    useEffect(()=> {
        if (detail) {
            axios.get(`https://api.cryptapi.io/${detail}/info/`)
            .then((r) => setCurrentCrypto(r.data))
            .catch(e => console.log(e))
        }
    }, [detail])

    const [amount, setAmount] = useState(0)

    const handleChange = e => { 
        setAmount(e.target.value)
    }

    const handleAddFavorite = e => {
        e.preventDefault()
        let newFav = {...currentCrypto, amount}
        setFavorites(...favorites, newFav)
    }

    if (currentCrypto === {}) return <h1>Loading...</h1>

    return (
        <div>
            <img src={currentCrypto.logo} className='currentcrypto-logo'></img>
            <h1>{currentCrypto.coin} ({currentCrypto.ticker})</h1>
            <span>Price: {currentCrypto.prices?.USD}</span>
            <form onSubmit={handleAddFavorite}>
                <input onChange={handleChange} type='number' placeholder='Cantidad'></input>
                <button type='submit'>Añadir</button>
            </form>
        </div>
    );
}

export default CryptoCardDetail;