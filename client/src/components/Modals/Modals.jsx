import {useModal} from '../../hooks/useModal.js';
import { Modal } from './Modal.jsx';
import './Modals.css';
import Searcher from '../Searcher/Searcher.jsx';
import CryptoCardDetail from '../CryptoCard/CryptoCardDetail.jsx';

export const Modals = () => {

    const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
    const [isOpenSeacrher, openSearcher, closeSearcher] = useModal(false)

    return(
    <div>
        <h2>Modales</h2>
        <button onClick={openCryptoCard}>Modal 1 (CryptoCardDetail)</button>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCardDetail/>
        </Modal>
        <button onClick={openSearcher}>Modal 2 (Searcher)</button>
        <Modal isOpen={isOpenSeacrher} closeModal={closeSearcher}>
            <Searcher closeSearcher={closeSearcher} openDetail={openCryptoCard}/>
        </Modal>
    </div>
    )
}