import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ image, alt, toggleModal }) => {
  const { overlay, modal } = styles;
  return (
    <div className={overlay} onClick={toggleModal}>
      <div className={modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};
export default Modal;
