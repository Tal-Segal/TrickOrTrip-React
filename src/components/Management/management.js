import React from 'react';
import {Convert} from 'mongo-image-converter';

import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";

class Management extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        usernames: [],
        roles: [],
        images: [],
        dates: [],
        changedRole: '',
        imageFile: ''
    };


    componentDidMount() {
        this.getPosters();
    }

    getPosters = async () => {
        try {
            let response = await fetch('/management/data');
            let users = await response.json();

            //alert("received!");
            let usernames = [];
            let roles = [];
            let images = [];
            let dates = [];
            for (let item of users) {
                //alert(item.image);
                usernames.push(item.username);
                roles.push(item.role);
                images.push(item.image);
                dates.push(item.start_date)
            }

            this.setState({images: images, usernames: usernames, roles: roles, dates: dates});
        } catch {
            alert("error");
        }
    }


    displayUsers = (images, usernames, roles, dates) => {
        if (!images.length) return null;

        //alert("right here");
        //alert(posters.length);
        //alert(posters.at(0));
        return (
            images.map((poster, index) => (
                <div key={index}>
                    <div className="col-md-6">
                        <img src={poster} alt="" className="figure-img img-fluid"/>
                        <figcaption className="figure-caption"></figcaption>
                    </div>
                    <div className="col-md-6">
                        <h4>{usernames.at(index)}</h4>
                        <h6>{roles.at(index)}</h6>
                        <div>
                            <button onClick={event => this.handleDeleteClick(event, usernames.at(index))}>Delete
                            </button>
                            <br/>
                            <b> Edit user role </b>
                            <select onChange={(event) => this.changeRole(event)}>
                                <option> ---Choose role---</option>
                                <option> Admin</option>
                                <option> Employee</option>
                                <option> Customer</option>
                            </select>
                            <button onClick={event => this.handleEditClick(event, usernames.at(index))}>Edit</button>
                        </div>
                        <p>Registered on {dates.at(index)}</p>
                        <br/>
                    </div>
                </div>
            )));

    }

    changeRole(event) {
        this.setState({changedRole: event.target.value});
    }

    handleDeleteClick(event, username) {
        this.onDelete(username);
    }

    handleEditClick(event, username) {
        this.onEdit(username, this.state.changedRole);
    }

    async onDelete(userName) {

        try {
            // check is user exists
            let response = await fetch("/management/delete/" + userName, {method: 'delete', body: userName})
            //let body = await response.json();

            if (response.ok) {
                alert("ok");

            } else {
                alert("not ok")
            }
        } catch (e) {
            console.error('error: ', e)
        } finally {
            window.location.reload();
        }
    }

    async onEdit(username, role) {
        try {
            let response = await fetch(
                "/management/edit/" + username + "/" + role,
                {method: 'put'})
            if (response.ok) {
                alert("ok");

            } else {
                alert("not ok")
            }
        } catch (e) {
            console.error('error: ', e)
        } finally {
            window.location.reload();
        }
    }

    addUser = async () => {
        let form = document.getElementById('addUserForm');
        // eslint-disable-next-line no-unused-vars
        let formdata = new URLSearchParams(new FormData(form));
        alert("before conversion: " + this.state.imageFile);

        const convertedImage = await Convert(this.state.imageFile)
        alert("after conversion: " + convertedImage);

        if (!convertedImage) {
            alert('The file is not in format of image/jpeg or image/png')
        } else {
            formdata.append('profile', convertedImage);
        }

        try {
            let response = await fetch("/management/add",
                {
                    method: "post",
                    body: formdata
                });
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left-side">
                            <br/>
                            <h3>Active users
                                <a href="javascript:" id="refresh">
                                    <i onClick="reload()" tyle="color: #8d8d8d; font-size: x-large"
                                       className="fa fa-refresh">
                                    </i>
                                </a>
                            </h3>
                            <br/>
                            <div className="row" id="management-content2">
                                {this.displayUsers(this.state.images, this.state.usernames, this.state.roles, this.state.dates)}
                            </div>

                        </div>


                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="right-side">
                                        <br/>
                                        <h3>Add user</h3>
                                        <br/>
                                        <figure>
                                            <img src={banner_image_2} className="figure-img img-fluid" alt=""/>
                                        </figure>
                                        <form id="addUserForm" name="addUserForm">
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
                                                    <label htmlFor="image">Choose image</label>
                                                    <input className="form-control" id="image" name="image"
                                                           placeholder="Image"
                                                           type="file" required
                                                           onChange={(e) => this.setState({imageFile: e.target.files[0]})}
                                                    />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-xs-12 col-md-12 form-group">
                                                    <button className="btn btn-primary"
                                                            onClick={() => this.addUser()}>Add
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
                                                    <select id="editRole" name="editRole"
                                                            onChange='combo(this, ’demo’)'>
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

                {/*<!-- Footer -->*/}
                <footer>
                    <section className="footer-top">
                        {/*<!--Container-->*/}
                        <div className="container">
                            <h2>Recent Trips</h2>
                            <div className="row text-center text-lg-left">
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
                                        src={banner_image_1} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
                                        src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
                                        src={banner_image_3} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
                                        src={banner_image_4} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
                                        src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img
                                        className="img-fluid img-thumbnail"
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


export default Management;