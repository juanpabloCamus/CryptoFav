import {useModal} from '../../hooks/useModal.js';
import { Modal } from './Modal.jsx';
import './Modals.css';
import { CryptoCard } from '../CryptoCard/CryptoCard.jsx'

export const Modals = () => {

    const [isOpenCryptoCard, openCryptoCard, closeCryptoCard] = useModal(false)
    //const [isOpen2, openModal2, closeModal2] = useModal(false)

    return(
    <div>
        <h2>Modales</h2>
        <button onClick={openCryptoCard}>Modal 1</button>
        <Modal isOpen={isOpenCryptoCard} closeModal={closeCryptoCard}>
            <CryptoCard/>
        </Modal>
        {/* <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpen2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Chau pibes</p>
        </Modal> */}
    </div>
    )
}