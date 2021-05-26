import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({onClose}) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays')

const Modal = ({ children, onClose }) => {
  return (
    <Fragment>
      {/*<Backdrop/>*/}
      {/*<ModalOverlay>{children}</ModalOverlay>*/}
      {ReactDOM.createPortal(<Backdrop  onClose={onClose}/>, portalElement )}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
