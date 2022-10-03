import { useEffect, useState } from 'react';
import './Searcher.css';
import axios from 'axios';
import { CryptoCard } from '../CryptoCard/CryptoCard';

const requiredCryptos = ['btc', 'eth', 'ltc', 'trx', 'bch', 'xmr']

function Searcher({openDetail, closeSearcher, setDetail, currency}) {

    const [initialData, setInitalData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        async function getData() {
            if (initialData.length < 6) {
                requiredCryptos.map(async c => {
                    let { data } = await axios.get(`https://api.cryptapi.io/${c}/info/`);
                    currentData.push(data)
                    initialData.push(data)
                    setCurrentData(initialData)
                    setInitalData(initialData)
                })
            }
        }
        getData()
    }, [])

    const handleChange = (e) => {
        let data = initialData;
        let search = []
        data.map(c => {
            let name = c.coin
            name = name.toLowerCase()
            if (name.includes(e.target.value.toLowerCase())) {
                search.push(c)
            }
        })
        setCurrentData(search)
    }

    return (
        <div className='searcher-container'>
            <form className='form'>
                <input onChange={handleChange} placeholder='Example: Bitcoin'></input>
            </form>
            <div className='cards-container'>
                {
                currentData.map(c => 
                    (
                        <CryptoCard
                            context = 'searcher'
                            key={c.coin}
                            ticker={c.ticker}
                            name={c.coin}
                            logo={c.logo}
                            price={c.prices[currency]}
                            openDetail={openDetail}
                            closeSearcher={closeSearcher}
                            setDetail={setDetail}
                            currency = {currency}
                        />
                    )
                )
                }
            </div>
        </div>
    );
}

export default Searcher;