import React from 'react'
import {Button} from 'react-bootstrap'

//import service from "../../../server/services/management_service.js";

const logout = () => {
    localStorage.setItem('logged', 'no');
    localStorage.removeItem('role');
    window.location = "http://localhost:3000";
}

function LogoutButton() {

    return (
        <>
            <Button variant="success" onClick={logout}>
                Logout
            </Button>
        </>
    )
}

export default LogoutButton
