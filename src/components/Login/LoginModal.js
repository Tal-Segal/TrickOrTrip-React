import React from 'react';

import '../../css/animate.css';
import '../../css/main.css';
import '../../css/index.css';


// eslint-disable-next-line react/prop-types
const LoginModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default LoginModal;