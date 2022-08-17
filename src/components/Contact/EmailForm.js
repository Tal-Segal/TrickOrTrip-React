import React from 'react'

import {useState} from "react";
import emailjs from "@emailjs/browser";

//import service from "../../../server/services/management_service.js";


function ModalDialog() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {

        sendFeedback("service_r7njmeg", "template_ra2czfx", {message: feedback, to_name:name, from_name: "TrickOrTrip", reply_to: email}, "e_UstuqeKRd-qH5Zc")
    }

    const sendFeedback = (serviceId, templateId, variables, publicKey) => {
        emailjs.send(serviceId, templateId, variables, publicKey)
            .then(() => {
                alert('Email successfully sent!')
            }).catch(err => alert('Oh well, you failed. Here some thoughts on the error that occured:' + err))
    }

    return (
        <>
            <div>
                <div className="container py-5 main">
                    <div className="row">
                        <div className="col-md-12">
                            <form id="emailForm" name="emailForm">
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Your Name"
                                               value={name}
                                               name="name"
                                               required onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Your Email id"
                                               value={email}
                                               name="email"
                                               required onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                                <textarea type="text" className="form-control"
                                                          value={feedback}
                                                          name="feedback"
                                                          placeholder="your Message" rows="8" required
                                                          onChange={(e) => setFeedback(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary px-4">Alright
                                    Submit it
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
