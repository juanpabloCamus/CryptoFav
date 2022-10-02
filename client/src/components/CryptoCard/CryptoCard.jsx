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
                    <div className='title'>   
                        <img className='crypto-card-logo'src={logo}></img>
                        <h1>{name}</h1>
                    </div>
                    <h5>{price}USD</h5>
                </div>
                :
                <div className="crypto-card-container">
                    <div className='title'>   
                        <img className='crypto-card-logo'src={logo}></img>
                        <h1>{name}</h1>
                    </div>
                    <h5>{price}USD</h5>
                    <button className='delete-button' onClick={handleDelete}>X</button>
                </div>
            }
        </>
    )
}