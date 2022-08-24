import React from 'react';
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";
import CheckoutModal from "../Gallery/CheckoutModal.js";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        sources: [],
        descriptions: [],
        creations: [],
        prices: []
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
            let prices = [];
            for (let item of posters) {
                sources.push(item.source);
                descriptions.push(item.description);
                creations.push(item.creation_date);
                prices.push(item.price);
            }

            this.setState({sources: sources, descriptions: descriptions, creations: creations, prices: prices});
        } catch {
            alert("error");
        }
    }

    displayPosters = (sources, descriptions, creations, prices) => {
        if (!sources.length) return null;

        return (
            sources.map((poster, index) => (
                <>
                    <div className="col" align="center"></div>
                <div key={index} className="col-5">
                    <div className="col-md-12 ">
                        <a className="col-xl-6 col-md-4 box-1">
                        <img src={poster} border="3px" alt="" className="img-fluid"/>
                        <div className="overlay">
                            <div className="text">{descriptions.at(index)}</div>
                            <div className="count">Created at {creations.at(index)}</div>
                        </div>
                        </a>
                    </div>
                    <div>
                        <button>{prices.at(index)}</button>
                        <div className="container mt-3">
                            <CheckoutModal/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
                </>
            )));
    }

    addPoster = async () => {
        let form = document.getElementById('addPosterForm');
        // eslint-disable-next-line no-unused-vars
        let formdata = new URLSearchParams(new FormData(form));
        try {
            let response = await fetch("/gallery/add",
                {
                    method: "post",
                    body: formdata
                });
            alert(formdata);
            if (response.ok) {
                alert("ok");

            } else {
                alert("not ok");
            }
        } catch (e) {
            alert("not ok");
            console.error('error: ', e)
        } finally {
            window.location.reload();
        }
    }

    render() {
        return (
            <>
            <div>
                <section className="gallery-page" id="gallery-content">
                    <div className="container">
                        <h2>Recently Added Photographs</h2>
                        <div className="justify-content-center">
                            <div className="col-12"></div>
                            <div className="col-md-12 col-12" id="gallery-div">
                                <div className="container">
                                    <div className="row">
                                        <div className="mt-3" align="center">
                                            <form className="mt-4 col-sm-5" id="addPosterForm" role="form" >
                                                <div className="form-group">
                                                    <input type="file" name="file" id="file"
                                                           className="form-control-file border" required/>
                                                </div>
                                                <br/>
                                                <div className="form-group">
                                                    <input className="form-control" id="description" name="description"
                                                           placeholder="Description"
                                                           type="text" required/>
                                                </div>
                                                <br/>
                                                <div className="form-group">
                                                    <input className="form-control" id="price"
                                                           name="price"
                                                           placeholder="Price"
                                                           type="text" required/>
                                                </div>
                                                <br/>
                                                <button onClick={this.addPoster} type="submit" className="btn btn-primary">Add Poster
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className="col-sm-12">
                                            <div className="preview-images"></div>
                                        </div>
                                    </div>
                                    <div className="row" align="center">
                                        {this.displayPosters(this.state.sources, this.state.descriptions, this.state.creations, this.state.prices)}
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

export default Gallery;