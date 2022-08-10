import React from 'react'
import { Modal, Button } from 'react-bootstrap'


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
                Open Modal
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={saveModal}>
                        Store
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDialog
