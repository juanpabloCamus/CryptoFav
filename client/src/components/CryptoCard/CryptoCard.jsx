export const CryptoCard = ({name, logo, place}) => {
    return (
        <div style={{display: 'flex', gap:'5px'}}>
            <img style={{maxWidth:'50px', maxHeight:'50px'}} src={logo}></img>
            <h1>{name}</h1>
        </div>
    )
}