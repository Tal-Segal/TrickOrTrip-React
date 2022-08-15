import React from 'react';

import banner_image_2 from "../../images/banner-image-2.jpg";

class Management extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        usernames: [],
        roles: [],
        images: [],
        changedRole: ''
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
            for (let item of users) {
                //alert(item.image);
                usernames.push(item.username);
                roles.push(item.role);
                images.push(item.image);
            }

            this.setState({images: images, usernames: usernames, roles: roles});
        } catch {
            alert("error");
        }
    }


    displayUsers = (images, usernames, roles) => {
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
                        <br/>
                        <div>
                            <button onClick={event => this.handleDeleteClick(event, usernames.at(index))}>Delete</button>
                            <br/>
                            <b> Edit user role </b>
                            <select onChange={(event) => this.changeRole(event)}>
                                <option> ---Choose role---</option>
                                <option> Admin </option>
                                <option> Employee </option>
                                <option> Customer </option>
                            </select>
                            <button onClick={event => this.handleEditClick(event, usernames.at(index))}>Edit</button>
                        </div>
                        <p>Registered on</p>
                    </div>
                </div>
            )));

    }

    changeRole(event) {
        this.setState({changedRole: event.target.value});
    }

    handleDeleteClick(event, username)
    {
        this.onDelete(username);
    }

    handleEditClick(event, username)
    {
        this.onEdit(username, this.state.changedRole);
    }

    async onDelete(userName) {

        try {
            // check is user exists
            let response = await fetch("/management/delete/" + userName, {method: 'delete', body:userName} )
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

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left-side">
                            <h2>Active users
                                <a href="javascript:" id="refresh">
                                    <i onClick="reload()" tyle="color: #8d8d8d; font-size: x-large"
                                       className="fa fa-refresh">
                                    </i>
                                </a>
                            </h2>
                            <div className="row" id="management-content2">
                                {this.displayUsers(this.state.images, this.state.usernames, this.state.roles)}
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
                                                    <label htmlFor="image">Choose image</label>
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
            </>
        );

    }
}


export default Management;