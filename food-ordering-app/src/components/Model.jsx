import React from 'react';
import './Modal.css';
import Button from './elements/Button';

const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div style={{ display: "ruby-text", margin: "10px", }}>
                    <Button
                        onClick={handleClose}>Close</Button>
                </div>

            </section>
        </div>
    );
};

export default Modal;
