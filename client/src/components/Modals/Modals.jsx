import {useModal} from '../../hooks/useModal.js';
import { Modal } from './Modal.jsx';
import './Modals.css';
import { CryptoCard } from '../CryptoCard/CryptoCard.jsx'
import Searcher from '../Searcher/Searcher.jsx';

export const Modals = () => {

    const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
    const [isOpenSeacrher, openSearcher, closeSearcher] = useModal(false)

    return(
    <div>
        <h2>Modales</h2>
        <button onClick={openCryptoCard}>Modal 1 (CryptoCard)</button>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCard/>
        </Modal>
        <button onClick={openSearcher}>Modal 2 (Searcher)</button>
        <Modal isOpen={isOpenSeacrher} closeModal={closeSearcher}>
            <Searcher/>
        </Modal>
    </div>
    )
}