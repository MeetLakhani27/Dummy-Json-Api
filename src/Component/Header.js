import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from "react-router-dom"
import Category from './Category';
import Click from './Click';

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="color">
                <Container fluid>
                    <Navbar.Brand className='ms-5' >APNA APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll ">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 ser"
                                aria-label="Search"
                            />
                            <Button className='me-2 search'>Search</Button>
                            <Link to="/" className='first me-5'>Home</Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
            
            
                <Route path="/" element={<Category/>} />
                <Route path="/Click/:id" element={<Click/>} />
            </Routes>
            
        </>
    )
}
