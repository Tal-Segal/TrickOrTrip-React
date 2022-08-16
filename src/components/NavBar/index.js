import React from 'react';

import nav_logo from '../../images/nav-logo.png';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    //NavBtn,
    //NavBtnLink,
} from './NavbarElements.js';
import LoginModal from "../Login/LoginModal.js";
import LogoutButton from "../Logout/LogoutButton.js";
import SignupModal from "../Signup/SignupModal.js";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const isLoggedIn = localStorage.getItem('logged') === "yes";
        const isAdmin = localStorage.getItem('role') === "admin";
        //const isEmployee = localStorage.getItem('role') === "employee";
        //const isCustomer = localStorage.getItem('role') === "customer";


        return (
            <>
                <Nav id="nav_bar" >
                    <Bars/>
                    <NavMenu>

                        <a className="navbar-brand">
                            <img src={nav_logo} alt="nav-logo"/>
                        </a>

                        <li id="nav-home">
                            <NavLink to='/' activeStyle>
                                Home
                            </NavLink>
                        </li>
                        <li id="nav-about">
                            <NavLink to='/about' activeStyle>
                                About
                            </NavLink>
                        </li>
                        <li id="nav-contact">
                            <NavLink to='/contact' activeStyle>
                                Contact
                            </NavLink>
                        </li>
                        {isLoggedIn
                            ? <li id="nav-gallery">
                                <NavLink to='/gallery' activeStyle>
                                    Gallery
                                </NavLink>
                            </li>
                            : <div/>
                        }
                        {isAdmin
                            ? <li id="nav-management">
                                <NavLink to='/management' activeStyle>
                                    Management
                                </NavLink>
                            </li> : <div/>
                        }
                        {isLoggedIn
                            ? <li id="nav-orders">
                                <NavLink to='/orders' activeStyle>
                                    My Orders
                                </NavLink>
                            </li> : <div/>
                        }
                        {!isLoggedIn
                            ? <li id="nav-login">
                                <div className="container mt-3">
                                    <LoginModal/>
                                </div>
                            </li>
                            : <div/>
                        }
                        {!isLoggedIn
                            ?
                            <li>
                                <div className="container mt-3">
                                    <SignupModal />
                                </div>
                            </li>
                            : <div/>

                        }
                        {isLoggedIn
                            ? <li id="nav-login">
                                <div className="container mt-3">
                                    <LogoutButton/>
                                </div>
                            </li> : <div/>
                        }
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                    </NavMenu>
                </Nav>
            </>
        );
    }
}


export default Navbar;
