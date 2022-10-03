import { useEffect, useState } from 'react';
import './CryptoCardDetail.css';
import axios from 'axios';
import Loader from '../Loader/Loader.jsx'

function CryptoCardDetail({closeCryptoCard, currency, detail, setFavorites, favorites}) {

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
        setAmount(0)
        closeCryptoCard()
    }
    
    if (!currentCrypto.coin) return <Loader/>

    return (
        <div className='carddetail-container' >
            <img src={currentCrypto.logo} className='currentcrypto-logo'></img>
            <h1>{currentCrypto.coin} ({currentCrypto.ticker})</h1>
            <span className='span-price'>${currentCrypto.prices[currency]} {currency}</span>
            <form className='amount-form' onSubmit={handleAddFavorite}>
                <input onChange={handleChange} type='number' step="any" placeholder={`Cuanto ${currentCrypto.coin} tienes?`}></input>
                <button type='submit'>Añadir</button>
            </form>
            {
                currentCrypto.amount ? 
                <div>
                    <h3 className='amount-spam'>
                        Tienes: {currentCrypto.amount} {currentCrypto.coin} en tu cartera 
                    </h3>
                </div>
                : 
                <span className='amount-spam' >No has agregado {currentCrypto.coin} a tu cartera aun</span>
            }
        </div>
    );
}

export default CryptoCardDetail;