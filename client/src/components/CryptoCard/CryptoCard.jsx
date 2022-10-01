import './CryptoCard.css';

export const CryptoCard = ({openDetail, closeSearcher, setDetail, ticker, name, logo}) => {

    const handleClick = () => {
        setDetail(ticker)
        closeSearcher()
        openDetail()
    }

    return (
        <div onClick={handleClick} className="crypto-card-container">
            <img className='crypto-card-logo'src={logo}></img>
            <h1>{name}</h1>
        </div>
    )
}