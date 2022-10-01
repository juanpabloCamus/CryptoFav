import { useEffect, useState } from 'react';
import './Searcher.css';
import axios from 'axios';
import { CryptoCard } from '../CryptoCard/CryptoCard';

//const requiredCryptos = ['btc', 'eth', 'ltc', 'trx']

function Searcher() {

    const [initialData, setInitalData] = useState([])

    useEffect(() => {
        async function getData() {
            let { data } = await axios.get(`https://api.cryptapi.io/btc/info/`);
            setInitalData([...initialData, data])
        }
        getData()
    }, [])

    return (
        <div className='searcher-container'>
            {
                initialData.map(c => 
                    (
                        <CryptoCard
                            key={c.coin}
                            name={c.coin}
                            logo={c.logo}
                        />
                    )
                )
            }
        </div>
    );
}

export default Searcher;