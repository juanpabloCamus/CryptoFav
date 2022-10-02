import './CryptoCard.css';

export const CryptoCard = (
    {
        openDetail,
        closeSearcher,
        setDetail,
        setFavorites,
        favorites,
        ticker,
        name,
        logo,
        price,
        context
    }) => {

    const handleClick = (e) => {
        if (context === 'searcher') {
            setDetail(ticker)
            closeSearcher()
            openDetail()
        }
        else {
            if (e.target.name === 'delete') return
            setDetail()
            setDetail(ticker)
            openDetail() 
        }    
    }

    const handleDelete = () => {
        const filterFav = favorites.filter(c =>  c.coin !== name);
        setFavorites(filterFav)
        localStorage.setItem('Favorites', JSON.stringify(filterFav))
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
                <div onClick={handleClick} className="crypto-card-container">
                    <div className='title'>   
                        <img className='crypto-card-logo'src={logo}></img>
                        <h1>{name}</h1>
                    </div>
                    <h5>{price}USD</h5>
                    <button name='delete' className='delete-button' onClick={handleDelete}>X</button>
                </div>
            }
        </>
    )
}