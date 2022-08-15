import React from 'react';

import banner_image_2 from "../../images/banner-image-2.jpg";

class Management extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left-side">
                            <h2>Active users
                                <a href="javascript:" id="refresh">
                                    <i onClick="reload()" tyle="color: #8d8d8d; font-size: x-large" className="fa fa-refresh">
                                    </i>
                                </a>
                            </h2>
                            <div className="row" id="management-content2">
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="right-side">
                                        <h3>Add user</h3>
                                        <figure>
                                            <img src={banner_image_2} className="figure-img img-fluid" alt=""/>
                                        </figure>
                                        <form id="addUserForm" method="post" className="form" role="form"
                                              name="addUserForm"
                                              action="/addUser">
                                            <div className="row">
                                                <div className="col-xs-6 col-md-6 form-group">
                                                    <input className="form-control" id="username" name="username"
                                                           placeholder="Username"
                                                           type="text" required/>
                                                </div>
                                                <div className="col-xs-6 col-md-6 form-group">
                                                    <input className="form-control" id="password" name="password"
                                                           placeholder="Password"
                                                           type="password" required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6 col-md-6 form-group">
                                                    <br/>
                                                    <input className="form-control" id="role" name="role"
                                                           placeholder="Role" type="text"
                                                           list="roles" required/>
                                                    <datalist id="roles">
                                                        <option value="Admin"/>
                                                            <option value="Employee"/>
                                                                <option value="Customer"/>
                                                    </datalist>
                                                </div>
                                                <div className="col-xs-6 col-md-6 form-group">
                                                    <label htmlFor="image" >Choose image</label>
                                                    <input className="form-control" id="image" name="image"
                                                           placeholder="Image"
                                                           type="file" required/>
                                                    {/*<input className="form-control" id="image" style="display: none" name="image" placeholder="Image" type="file" required/>*/}

                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-xs-12 col-md-12 form-group">
                                                    <button className="btn btn-primary"
                                                            onClick="addUser(form)">Add
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bt">
                        <div className="col-sm-12">
                            <ul>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="modal fade bs-modal-sm edit-user" id="myModal" role="dialog"
                     aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div id="myTabContent2" className="tab-content">
                                    <div className="active tab-pane in" id="updateModal">
                                        <form className="form-horizontal" id="updateForm" name="updateForm">
                                            <fieldset>
                                                <div className="group">
                                                    <select id="editRole" name="editRole" onChange='combo(this, ’demo’)'>
                                                        <option>admin</option>
                                                        <option>employee</option>
                                                        <option>costumer</option>
                                                    </select>
                                                </div>
                                                <div className="control-group">
                                                    <label className="control-label" htmlFor="update"></label>
                                                    <div className="controls">
                                                        <button type="submit" onClick="onEdit()" id="update"
                                                                name="update"
                                                                className="btn btn-primary btn-block">Update
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="modal-body" id="editModalBody">

                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Management;