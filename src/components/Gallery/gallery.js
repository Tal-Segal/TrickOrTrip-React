import React from 'react';
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        sources: [],
        descriptions: [],
        creations: []
    };

    componentDidMount() {
        this.getPosters();
    }

    getPosters = async () => {
        try {
            let response = await fetch('/gallery/data');
            let posters = await response.json();

            let sources = [];
            let descriptions = [];
            let creations = [];
            for (let item of posters) {
                sources.push(item.source);
                descriptions.push(item.description);
                creations.push(item.creation_date);
            }

            this.setState({sources: sources, descriptions: descriptions, creations: creations});
        } catch {
            alert("error");
        }
    }

    displayPosters = (sources, descriptions, creations) => {
        if (!sources.length) return null;

        return (
            sources.map((poster, index) => (
                <div key={index}>
                    <div className="col-md-6">
                        <a className="col-xl-6 col-md-4 box-1">
                        <img src={poster} alt="" className="img-fluid"/>
                        <div className="overlay">
                            <div className="text">{descriptions.at(index)}</div>
                            <div className="count">Created at {creations.at(index)}</div>
                        </div>
                        </a>
                    </div>
                    <div>
                        <button>Buy now</button>
                    </div>
                    <br/>
                    <br/>
                </div>
            )));

    }

    render() {
        return (
            <>
            <div>
                <section className="gallery-page" id="gallery-content">
                    <div className="container">
                        <h2>Recently Added Photographs</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-12" id="gallery-div">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8 mt-3">
                                            <form className="mt-4" role="form">
                                                <div className="form-group">
                                                    <input type="file" name="file" id="file"
                                                           className="form-control-file border" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="description" name="description"
                                                           placeholder="Description"
                                                           type="text" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="creation_date"
                                                           name="creation_date"
                                                           placeholder="Creation Date"
                                                           type="date" required/>
                                                </div>
                                                <button type="submit" onClick="addPoster(form)"
                                                        className="btn btn-primary">Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="preview-images"></div>
                                        </div>
                                    </div>

                                    <div className="row" id="management-content2">
                                        {this.displayPosters(this.state.sources, this.state.descriptions, this.state.creations)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">
                        <a href=img.ref data-toggle="lightbox" data-gallery="example-gallery"
                           className="col-xl-6 col-md-4 box-1">

                        </a>
                    </div>*/}

                    </div>
                </section>
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

export default Gallery;