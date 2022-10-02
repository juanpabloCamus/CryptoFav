import './CryptoCard.css';

export const CryptoCard = ({openDetail, closeSearcher, setDetail, ticker, name, logo, price}) => {

    const handleClick = () => {
        setDetail(ticker)
        closeSearcher()
        openDetail()
    }
    console.log(price['USD']);
    return (
        <div onClick={handleClick} className="crypto-card-container">
            <img className='crypto-card-logo'src={logo}></img>
            <h1>{name}</h1>
            <h5>Price: {price}</h5>
        </div>
    )
}