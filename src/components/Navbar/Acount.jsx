import React, { useState } from "react";
import axios from "axios";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Acount = (props) => {
    const [show, setShow] = useState(false); //Modal show or hide
    const [editShow, setEditShow] = useState(false); //ModalEdit show or hide

    // Modal for acount
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true)
    };

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = (e) => {
        e.preventDefault();
        setEditShow(true)
    };


    const handleLogout = (e) => {
        props.setSignedIn(false);
        // axios.post("http://127.0.0.1:8000/logout/", {
        //     username: props.user.username, email: props.user.email
        
        
    };

    return (
        <>

        <button type="info" className="btn btn-outline-info btn-lg mx-1" onClick={handleShow}>My Acount</button>

        <Modal show={show} onHide={handleClose} size="lg" centered>  {/* Info Acount Modal */}
            <Modal.Header closeButton>
            <Modal.Title>ACOUNT INFO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="h5">Username: USERNAME</p>
                <p className="h5 mb-5">Email: EMAIL</p>
                <Button variant="warning" className="mt-5" onClick={handleEditShow}>EDIT</Button>
                <Button variant="info" className="mx-5 mt-5">INFO</Button>
                <Button variant="danger" className="mt-5" id="login" onClick={handleLogout}>Logout</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="mx-5" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={editShow} onHide={handleEditClose} size="xl" centered>  {/* Edit Acount Modal */}
            <Modal.Header closeButton>
                <Modal.Title>EDIT INFO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="h6 mb-5">Import the value you want to edit. For changing the password please fill in the old password, then the new password, and finally repeat the new password.</p>
                <Form className="d-flex flex-column">
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username"  placeholder="Enter Username"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Old password</Form.Label>
                        <Form.Control type="password" name="oldpassword" placeholder="Old password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> New password</Form.Label>
                        <Form.Control type="password" name="newpassword" placeholder="New password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Repeat password</Form.Label>
                        <Form.Control type="password" name="oldpassword1" placeholder="Repeat new password"/>
                    </Form.Group>  
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="mx-5" onClick={handleEditClose}>Close</Button>
                <Button variant="success" className="" id="edit" onClick={handleLogout}>Submit</Button>
            </Modal.Footer>
        </Modal>


        </>
    )
};

export default Acount;