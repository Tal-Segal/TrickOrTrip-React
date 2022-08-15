import React from 'react';

import support_bg from "../../images/support-bg.jpg";

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

                {/*<!-- Footer -->*/}
                <footer>
                    <section className="footer-top">
                        {/*<!--Container-->*/}
                        <div className="container">
                            <h2>Recent Trips</h2>
                            <div className="row text-center text-lg-left">
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_1} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_3} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_4} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#index.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
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