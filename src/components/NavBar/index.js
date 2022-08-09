import React from 'react';

import nav_logo from '../../images/nav-logo.png';

/*import '../../css/animate.css';
import '../../css/main.css';
import '../../css/index.css';*/

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <li id="nav-gallery">
                            <NavLink to='/gallery' activeStyle>
                                Gallery
                            </NavLink>
                        </li>
                        <li id="nav-management">
                            <NavLink to='/management' activeStyle>
                                Management
                            </NavLink>
                        </li>
                        <li id="nav-login">
                            <NavBtn>
                                <NavBtnLink to='/login'>Log In</NavBtnLink>
                            </NavBtn>
                        </li>
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                    </NavMenu>
                </Nav>
            </>
        );
    }
}


export default Navbar;
