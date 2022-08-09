import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="gallery-page" id="gallery-content">
                    <div className="container">
                        <h2>Recently Added Photographs</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-12" id="gallery-div">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8 mt-3">
                                            <form className="mt-4" action="/addPoster" role="form" method="POST"
                                                  encType="multipart/form-data">
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
        );
    }
}

export default Gallery;