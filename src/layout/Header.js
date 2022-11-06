import React from 'react';
import './Header.less';
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Form, Button } from 'react-bootstrap';
import Hanab1Jpg from '../assets/hanab1.png';

export default function Header() {

    return (
        <header className="header">
            <Navbar key="lg" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        Hanab1
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Hanab1
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='blogs'>Blogs</Nav.Link>
                                <Nav.Link href='about'>About</Nav.Link>            
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}