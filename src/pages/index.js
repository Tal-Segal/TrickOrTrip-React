import React from 'react';

import '../css/animate.css';
import '../css/main.css';
import '../css/index.css';

/*
import '../utils/animate.js'
import '../utils/custom.js'
*/

import banner_image_4 from "../images/banner-image-4.jpg";
import banner_image_3 from "../images/banner-image-3.jpg";
import banner_image_2 from "../images/banner-image-2.jpg";
import banner_image_1 from "../images/banner-image-1.jpg";

const Home = () => {
    return (
        <>
            <html lang="en" xmlns="http://www.w3.org/1999/html">
            <head>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <meta name="description" content=""></meta>
                <meta name="author" content=""></meta>
                <title>TrickOrTrip</title>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700|Playfair+Display:400,700,900" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css"/>

            </head>

            {/*<!-- Body -->*/}
            <body>
            <div id="page_content">
                {/*<!--Carousel Wrapper-->*/}
                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails"
                     data-ride="carousel">
                    {/*<!--Slides-->*/}
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={banner_image_4} alt="First slide"/>
                            <div className="gradient"></div>
                            <div className="carousel-caption">
                                <h1>Woman walking in the green fields.</h1>
                                <p className="lead">Woman walking in the green fields...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banner_image_3} alt="Second slide"/>
                            <div className="gradient"></div>
                            <div className="carousel-caption">
                                <h1>Remainings of old boat in the beach of bali.</h1>
                                <p className="lead">Remainings of old boat in the beach of bali...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banner_image_2} alt="Third slide"/>
                            <div className="gradient"></div>
                            <div className="carousel-caption">
                                <h1>Beautiful sunsetting in the mountains.</h1>
                                <p className="lead">Beautiful sunsetting in the mountains...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banner_image_1} alt="Third slide"/>
                            <div className="gradient"></div>
                            <div className="carousel-caption">
                                <h1>Snow white mountain of east china.</h1>
                                <p className="lead">Snow white mountain of east china...</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/*<!--/.Carousel Wrapper-->*/}
            </div>


            {/*<!-- Footer -->*/}
            <footer>
                <section className="footer-top">
                    {/*<!--Container-->*/}
                    <div className="container">
                        <h2>Recent Trips</h2>
                        <div className="row text-center text-lg-left">
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                           src={banner_image_1} alt=""/></a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                           src={banner_image_2} alt=""/></a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                           src={banner_image_3} alt=""/></a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                           src={banner_image_4} alt=""/></a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                           src={banner_image_2} alt=""/></a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-xs-6">
                                <a href="#" className="d-block h-100"><img className="img-fluid img-thumbnail"
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

            {/*<!-- Return to Top -->*/}
            <a href="javascript:" id="return-to-top"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></a>

            </body>
        </html>
        </>
    );
};

export default Home;
