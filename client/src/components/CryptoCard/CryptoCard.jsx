import './CryptoCard.css';

export const CryptoCard = ({openDetail, closeSearcher, setDetail, setFavorites, favorites, ticker, name, logo, price, context}) => {

    const handleClick = () => {
        setDetail(ticker)
        closeSearcher()
        openDetail()
    }

    const handleDelete = () => {
        const filterFav = favorites.filter(c =>  c.coin !== name);
        setFavorites(filterFav)
    }
    
    return (
        <>
            {
                context === 'searcher' ?
                <div onClick={handleClick} className="crypto-card-container">
                    <img className='crypto-card-logo'src={logo}></img>
                    <h1>{name}</h1>
                    <h5>Price: {price}</h5>
                </div>
                :
                <div className="crypto-card-container">
                    <img className='crypto-card-logo'src={logo}></img>
                    <h1>{name}</h1>
                    <h5>Price: {price}</h5>
                    <button onClick={handleDelete}>Borrar</button>
                </div>
            }
        </>
    )
}