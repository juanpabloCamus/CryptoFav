import './CryptoCard.css';

export const CryptoCard = ({name, logo, place}) => {
    return (
        <div className="crypto-card-container">
            <img className='crypto-card-logo'src={logo}></img>
            <h1>{name}</h1>
        </div>
    )
}