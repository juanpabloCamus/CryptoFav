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
            <input></input>
            {
                initialData.map(c => 
                    (
                        <CryptoCard
                            name={c.coin}
                            logo={c.logo}
                            place='searcher'
                        />
                    )
                )
            }
        </div>
    );
}

export default Searcher;