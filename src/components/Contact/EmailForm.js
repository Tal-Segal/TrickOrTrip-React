import React, {useRef} from 'react'

import {useState} from "react";
import { send } from 'emailjs-com';



function ModalDialog() {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const form = useRef();

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        send("service_r7njmeg", "template_ra2czfx", toSend, "e_UstuqeKRd-qH5Zc")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

        window.location = "http://localhost:3000/contact";
    }

    return (
        <>
            <div>
                <div className="container py-5 main">
                    <div className="row">
                        <div className="col-md-12">
                            <form ref={form} onSubmit={sendEmail} id="emailForm" name="emailForm">
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Your Name"
                                               value={toSend.from_name}
                                               name="from_name"
                                               required
                                               onChange={handleChange}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" className="form-control" placeholder="Your Email id"
                                               value={toSend.reply_to}
                                               name="reply_to"
                                               required onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                                <textarea className="form-control"
                                                          value={toSend.message}
                                                          name="message"
                                                          placeholder="your Message" rows="8" required
                                                          onChange={handleChange}
                                                ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary px-4">Alright
                                    Send it
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDialog
