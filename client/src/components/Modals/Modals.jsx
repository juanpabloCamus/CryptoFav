import {useModal} from '../../hooks/useModal.js';
import { Modal } from './Modal.jsx';
import './Modals.css';
import Searcher from '../Searcher/Searcher.jsx';
import CryptoCardDetail from '../CryptoCard/CryptoCardDetail.jsx';
import { useState } from 'react';

export const Modals = ({setFavorites, favorites}) => {

    const [detail, setDetail] = useState('')

    const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
    const [isOpenSeacrher, openSearcher, closeSearcher] = useModal(false)

    return(
    <div>
        <h2>Modales</h2>
        <button onClick={openCryptoCard}>Modal 1 (CryptoCardDetail)</button>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCardDetail favorites={favorites} setFavorites={setFavorites} detail={detail}/>
        </Modal>
        <button onClick={openSearcher}>Modal 2 (Searcher)</button>
        <Modal isOpen={isOpenSeacrher} closeModal={closeSearcher}>
            <Searcher setDetail={setDetail} closeSearcher={closeSearcher} openDetail={openCryptoCard}/>
        </Modal>
    </div>
    )
}