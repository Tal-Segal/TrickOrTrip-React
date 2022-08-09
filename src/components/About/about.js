import React from 'react';

import banner_image_1 from "../../images/banner-image-1.jpg";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-page" id="about-content">
                <div className="container">
                    <div className="row" id="about-content2">

                        <div className="col-sm-12">
                            <h3>About Us</h3>
                            <figure className='figure'>
                                <img src={banner_image_1} alt="about"/>
                            </figure>
                        </div>
                        <div className="col-sm-12">
                            <p> Welcome to my personal travel blog </p>
                            <p> I am happy to have you here </p>
                            <p> Please feel free to browse through my content </p>
                            <p> I am sure you will have a lot of fun </p>
                            <p> Have a nice and travelly day </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;