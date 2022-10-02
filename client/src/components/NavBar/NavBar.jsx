import './NavBar.css';
import logo from '../../assets/rocket.png'

function NavBar() {
    return (
        <div className='navbarContainer'>
            <div style={{display:'flex'}}>
                <h1>CryptoFav</h1>
                <img className='nav-logo' src={logo} alt='logo'></img>
            </div>
            <span>Lista tus criptomonedas favortitas!</span>
        </div>
    );
}

export default NavBar;