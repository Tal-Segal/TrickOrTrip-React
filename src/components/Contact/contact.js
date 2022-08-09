import React from 'react';

import support_bg from "../../images/support-bg.jpg";

import '../../css/animate.css';
import '../../css/main.css';
import '../../css/index.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="support" id="contact-content">
                    <div className="container" id="contact-content2">
                        <h3>Contact Us</h3>
                        <div className="row">
                            <div className="col-sm-12">
                                <figure className="figure">
                                    <img src={support_bg} className="figure-img img-fluid"
                                         alt="A generic square placeholder image with rounded corners in a figure."/>
                                </figure>
                            </div>
                            <div className="col-sm-12">
                                <p> Welcome to my personal travel blog, i love to travel the globe </p>
                                <p> I have been to so many beautiful places and met interesting people the world </p>
                                <p> This website is my mirror of life </p>
                                <p> I love to travel the globe, it is such a wonderful place </p>
                                <p> Come and take an adventure with me </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="container py-5 main">
                            <div className="row">
                                <div className="col-md-12">
                                    <form>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" placeholder="Your Name"
                                                       required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" placeholder="Your Email id"
                                                       required/>
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control"
                                                       placeholder="Your Phone Number" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-12">
                                                <textarea type="text" className="form-control"
                                                          placeholder="your Message" rows="8" required></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary px-4">Alright Submit it
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;