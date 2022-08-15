import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'



function ModalDialog() {
    const [isShow, invokeModal] = React.useState(false)
    const initModal = () => {
        return invokeModal(!false)}
    const closeModal = () => {
        return invokeModal(false)
    }
    const saveModal = () => {
        return invokeModal(false)
    }

    return (
        <>
            <Button variant="success" onClick={initModal}>
                Sign Up
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form action="/signup" method="post">
                        <Form.Group controlId="username">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control
                                type="text"
                                required
                                name="username"
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                required
                                name="password"
                            />

                        </Form.Group>


                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={saveModal}>
                        Log in
                    </Button>


                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDialog
