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
        <div className='button-container'>
            <button className='search-button' onClick={openSearcher}>Añadir</button>
        </div>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCardDetail favorites={favorites} setFavorites={setFavorites} detail={detail}/>
        </Modal>
        <Modal isOpen={isOpenSeacrher} closeModal={closeSearcher}>
            <Searcher setDetail={setDetail} closeSearcher={closeSearcher} openDetail={openCryptoCard}/>
        </Modal>
    </div>
    )
}