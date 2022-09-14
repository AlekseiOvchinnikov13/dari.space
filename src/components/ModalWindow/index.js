import {useRef} from 'react';
import styles from '../../styles/Components/ModalWindow.module.scss';

const ModalWindow = ({visible, onClose, children}) => {
  const modalDialogRef = useRef(null);

  const onCloseHandler = () => {
    modalDialogRef && modalDialogRef.current.classList.add(styles.modalDialogOut);
    setTimeout(() => onClose(), 500);
  };

  if (!visible) return null;

  return (
    <div className={styles.modal} onClick={onCloseHandler}>
      <div className={styles.modalDialog} onClick={e => e.stopPropagation()} ref={modalDialogRef}>
        <div className={styles.modalHeader}>
          <div/>
          <h4 className={styles.modalTitle}>Оставить заявку</h4>
          <button className={styles.modalClose} onClick={onCloseHandler}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;