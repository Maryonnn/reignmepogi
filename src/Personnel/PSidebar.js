import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Styles/PSidebar.css';

function Sidebar() {
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleClose = () => {
        setShow(false);
        setExpanded(false);
    };
    const handleShow = () => {
        setShow(true);
        setExpanded(true);
    };

    return (
        <>
            <Navbar 
                expanded={expanded} 
                expand="lg" 
                variant="dark" 
                className="flex-lg-column sidebar p-2"
            >
                <div className="px-0 container">
                    <Navbar.Brand href="#home" className="order-lg-1">
                        <div className="d-flex align-items-center gap-2">
                            <Navbar.Toggle 
                                aria-controls="offcanvasNavbar" 
                                onClick={handleShow} 
                                className="d-lg-none" 
                            />
                            <Image 
                                src="logo-navigatu.png" 
                                className='sidebar-logo'
                                height={30} 
                                width={45} 
                                alt="" 
                                fluid
                            />
                            <Image 
                                src="text-navigatu.png" 
                                height={40} 
                                width={150} 
                                alt="" 
                                fluid
                            />
                        </div>
                    </Navbar.Brand>
                    <div className="d-none d-lg-block">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link href="#home">Dashboard</Nav.Link>
                            <Nav.Link href="#features">Create Account</Nav.Link>
                            <Nav.Link href="#pricing">Startup Teams</Nav.Link>
                            <Nav.Link href="#pricing">Milestone</Nav.Link>
                            <Nav.Link href="#pricing">Competition</Nav.Link>
                            <Nav.Link href="#pricing">Seed Funding</Nav.Link>
                            <Nav.Link href="#pricing">User Profile</Nav.Link>
                            <Nav.Link href="#pricing">Logout</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </Navbar>

            <Offcanvas 
                show={show} 
                onHide={handleClose} 
                placement='start'
                className='my-offcanvas'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <Nav.Link href="#features">Create Account</Nav.Link>
                        <Nav.Link href="#pricing">Startup Teams</Nav.Link>
                        <Nav.Link href="#pricing">Milestone</Nav.Link>
                        <Nav.Link href="#pricing">Competition</Nav.Link>
                        <Nav.Link href="#pricing">Seed Funding</Nav.Link>
                        <Nav.Link href="#pricing">User Profile</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
