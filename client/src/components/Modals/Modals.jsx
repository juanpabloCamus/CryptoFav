import { Modal } from './Modal.jsx';
import './Modals.css';
import Searcher from '../Searcher/Searcher.jsx';
import CryptoCardDetail from '../CryptoCard/CryptoCardDetail.jsx';

export const Modals = (
    {
        setFavorites,
        favorites,
        isOpenCryptoCard,
        closeCryptoCard,
        isOpenSeacrher,
        closeSearcher,
        openCryptoCard,
        detail,
        setDetail,
        currency
    }) => {

    return(
    <div>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCardDetail closeCryptoCard={closeCryptoCard} currency={currency} favorites={favorites} setFavorites={setFavorites} detail={detail}/>
        </Modal>
        <Modal isOpen={isOpenSeacrher} closeModal={closeSearcher}>
            <Searcher currency={currency} setDetail={setDetail} closeSearcher={closeSearcher} openDetail={openCryptoCard}/>
        </Modal>
    </div>
    )
}