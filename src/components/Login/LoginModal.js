import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

import {useState} from "react";

//import service from "../../../server/services/management_service.js";


function ModalDialog() {
    const [isShow, invokeModal] = React.useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const initModal = () => {
        return invokeModal(true)
    }
    const closeModal = () => {
        return invokeModal(false)
    }

    /*const saveModal = () => {
        return invokeModal(false)
    }*/

    async function handleSubmit() {

        let form = document.getElementById('loginForm');
        // eslint-disable-next-line no-unused-vars
        let formdata = new URLSearchParams(new FormData(form));
        alert("here");

        try {
            // check is user exists
            let response = await fetch("/login",
                {
                    method: "post",
                    body: formdata
                });

            let body = await response.json();

            if (response.ok) {
                localStorage.setItem('username', formdata.get('username'));
                localStorage.setItem('logged', 'yes');

                alert("isLogged: " + localStorage.getItem('logged'));

                localStorage.setItem('role', body.userRole);
                alert("role: " + localStorage.getItem('role'));

            } else {
                localStorage.setItem('logged', 'no');
                alert("Invalid user credentials. Please try again.")
            }
        } catch (e) {
            console.error('error: ', e)
        } finally {
            window.location.reload();
        }
    }

    return (
        <>
            <Button variant="success" onClick={initModal}>
                Login
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="loginForm" name="loginForm">
                        <Form.Group controlId="username">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                required
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                required
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="dark" type="submit" onClick={handleSubmit}>
                        Log in
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDialog
