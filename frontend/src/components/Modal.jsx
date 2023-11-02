import { useNavigate } from 'react-router-dom'

import styles from './Modal.module.css'
const Modal = (props) => {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/');
        // navigate('..');
    }

    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler} />
            <dialog open className={styles.modal}>
                {props.children}
            </dialog>
        </>
    )
}

export default Modal
