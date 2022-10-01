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
            <h1>{currentCrypto.coin}</h1>
        </div>
    );
}

export default CryptoCardDetail;