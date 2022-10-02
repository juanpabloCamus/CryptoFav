import { useEffect, useState } from 'react';
import './Searcher.css';
import axios from 'axios';
import { CryptoCard } from '../CryptoCard/CryptoCard';

const requiredCryptos = ['btc', 'eth', 'ltc', 'trx']

function Searcher({openDetail, closeSearcher, setDetail}) {

    const [initialData, setInitalData] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

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
        e.preventDefault()
        try{
            let { data } = await axios.get(`https://api.cryptapi.io/${search}/info/`)
            setInitalData([data])
            setError(false)
        }catch(e){
            setError(true)
        }
    }

    return (
        <div className='searcher-container'>
            <form className='form' onSubmit={handleSearch}>
                <input onChange={handleChange} value={search}></input>
                <button type='submit'>Buscar</button>
            </form>
            {error ? <h4>Busqueda invalida</h4> : null}
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
                                price={c.prices['USD']}
                                openDetail={openDetail}
                                closeSearcher={closeSearcher}
                                setDetail={setDetail}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Searcher;