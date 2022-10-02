import { useEffect, useState } from 'react';
import './Searcher.css';
import axios from 'axios';
import { CryptoCard } from '../CryptoCard/CryptoCard';
import searchLogo from '../../assets/search.png'

const requiredCryptos = ['btc', 'eth', 'ltc', 'trx']

function Searcher({openDetail, closeSearcher, setDetail, currency}) {

    const [initialData, setInitalData] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        async function getData() {
            if (initialData.length < 4) {
                requiredCryptos.map(async c => {
                    let { data } = await axios.get(`https://api.cryptapi.io/${c}/info/`);
                    initialData.push(data)
                    setInitalData(initialData)
                })
            }
        }
        getData()
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = async (e) => {
        
    }

    return (
        <div className='searcher-container'>
            <form className='form' onSubmit={handleSearch}>
                <input onChange={handleChange} value={search} placeholder='Example: Btc'></input>
                <button type='submit'>
                    <img className='search-logo' src={searchLogo} alt='search'></img>
                </button>
            </form>
            <div className='cards-container'>
                {
                    initialData.map(c => 
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