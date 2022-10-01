import { useEffect, useState } from 'react';
import './CryptoCardDetail.css';
import axios from 'axios';

function CryptoCardDetail({detail}) {

    const [currentCrypto, setCurrentCrypto] = useState({})
    
    useEffect(()=> {
        if (detail) {
            axios.get(`https://api.cryptapi.io/${detail}/info/`)
            .then((r) => setCurrentCrypto(r.data))
            .catch(e => console.log(e))
        }
    }, [detail])

    if (currentCrypto === {}) return <h1>Loading...</h1>

    return (
        <div>
            <img src={currentCrypto.logo} className='currentcrypto-logo'></img>
            <h1>{currentCrypto.coin} ({currentCrypto.ticker})</h1>
            <span>Price: {currentCrypto.prices?.USD}</span>
            <form>
                <input placeholder='Cantidad'></input>
                <button type='submit'>Añadir</button>
            </form>
        </div>
    );
}

export default CryptoCardDetail;