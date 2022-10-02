import { useEffect, useState } from 'react';
import './CryptoCardDetail.css';
import axios from 'axios';

function CryptoCardDetail({detail, setFavorites, favorites}) {

    const [currentCrypto, setCurrentCrypto] = useState({})
    
    useEffect(()=> {
        if (detail) {
            setCurrentCrypto({})
            axios.get(`https://api.cryptapi.io/${detail}/info/`)
            .then((r) => {
                let currentFavs = JSON.parse(localStorage.getItem('Favorites'));
                let isFavorite = currentFavs === null ? [] : currentFavs.filter(c => c.ticker === detail);
                if (isFavorite.length === 0) {
                    setCurrentCrypto(r.data)
                } else {
                    setCurrentCrypto({...r.data, amount: isFavorite[0].amount})
                }
            })
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
        let updateFavs = favorites.filter(f => f.ticker !== detail);
        updateFavs = [...updateFavs, newFav]
        setFavorites(
            updateFavs
        )
        setCurrentCrypto(newFav)
        localStorage.setItem('Favorites', JSON.stringify(updateFavs))
    }

    if (!currentCrypto.coin) return <h1>Loading...</h1>

    return (
        <div className='carddetail-container' >
            <img src={currentCrypto.logo} className='currentcrypto-logo'></img>
            <h1>{currentCrypto.coin} ({currentCrypto.ticker})</h1>
            <span>{currentCrypto.prices?.USD} USD</span>
            {
                currentCrypto.amount ? <span>Cantidad: {currentCrypto.amount} </span> : null
            }
            <form onSubmit={handleAddFavorite}>
                <input onChange={handleChange} type='number' placeholder={`Cuanto ${currentCrypto.coin} tienes?`}></input>
                <button type='submit'>Añadir</button>
            </form>
        </div>
    );
}

export default CryptoCardDetail;