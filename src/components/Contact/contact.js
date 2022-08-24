import React from 'react';

import support_bg from "../../images/support-bg.jpg";

import emailjs from '@emailjs/browser'

import EmailForm from './EmailForm.js';

import '../../css/animate.css';
import '../../css/main.css';
import '../../css/index.css';
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '', number: '' };
    }

    setFeedback(event) {
        this.setState({feedback: event.target.value})
    }

    setName(event) {
        this.setState({name: event.target.value})
    }

    setEmail(event) {
        this.setState({email: event.target.value})
    }

    setNumber(event) {
        this.setState({number: event.target.value})
    }

    handleSubmit = () => {
        const templateId = 'template_id';

        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }

    sendFeedback = (templateId, variables) => {
        emailjs.init("e_UstuqeKRd-qH5Zc");
        emailjs.send(
            'gmail', templateId,
            variables
        ).then(() => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
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
                            </div>
                        </div>

                    </div>
                    <EmailForm/>
                </div>

                {/*<!-- Footer -->*/}
                <footer>
                    <section className="footer-top">
                        {/*<!--Container-->*/}
                        <div className="container">
                            <h2>Recent Trips</h2>
                            <div className="row text-center text-lg-left">
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_1} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_3} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_4} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_1} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        {/*<!-- /.container -->*/}
                    </section>
                    <section className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                        <li><a href="views/index.html">Home</a></li>
                                        <li className="hidden">/</li>
                                        <li><a href="about_us.html">About Us</a></li>
                                        <li className="hidden">/</li>
                                        <li><a onClick="$('#nav_bar').load('/navigation')">Gallery</a></li>
                                        <li className="hidden">/</li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- /.container -->*/}
                    </section>
                </footer>
            </>
        );
    }
}

export default Contact;