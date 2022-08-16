import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

import {useState} from "react";

//import service from "../../../server/services/management_service.js";


function ModalDialog() {
    const [isShow, invokeModal] = React.useState(false)
    const [credit_card, setCredit] = useState("");
    const [price, setPrice] = useState("");

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

        let form = document.getElementById('checkoutForm');
        // eslint-disable-next-line no-unused-vars
        let formdata = new URLSearchParams(new FormData(form));
        formdata.append('date', Date.now().toString());
        formdata.append('username', localStorage.getItem('username'));
        alert(formdata);

        try {
            // check is user exists
            let response = await fetch("/gallery/addOrder",
                {
                    method: "post",
                    body: formdata
                });

            //let body = await response.json();

            if (response.ok) {
                alert("ok");

            } else {
                alert("not ok");
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
                Buy it now
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>Check out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="checkoutForm" name="checkoutForm">
                        <Form.Group controlId="credit_card">
                            <Form.Label>
                                Credit Card Number
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={credit_card}
                                required
                                name="credit_card"
                                onChange={(e) => setCredit(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>
                                Price
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={price}
                                required
                                name="price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="dark" type="submit" onClick={handleSubmit}>
                        Pay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDialog
