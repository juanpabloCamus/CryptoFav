import './CryptoCard.css';
import trash from '../../assets/trash.png';
import Swal from 'sweetalert2';

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

    const handleDelete = async () => {
        const res = await Swal.fire({
            text:`Estas seguro que quieres eliminar ${name} de tus favoritos?`,
            showCancelButton: true,
        });
        if (res.isConfirmed) {
            const filterFav = favorites.filter(c =>  c.coin !== name);
            setFavorites(filterFav)
            localStorage.setItem('Favorites', JSON.stringify(filterFav))
        }
        return
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
                    <h5>${price} USD</h5>
                </div>
                :
                <div onClick={handleClick} className="crypto-card-container">
                    <div className='title'>   
                        <img className='crypto-card-logo'src={logo}></img>
                        <h1>{name}</h1>
                    </div>
                    <h5>${price} USD</h5>
                    <button name='delete' className='delete-button' onClick={handleDelete}>
                        <img name='delete' src={trash} alt='trash'></img>
                    </button>
                </div>
            }
        </>
    )
}