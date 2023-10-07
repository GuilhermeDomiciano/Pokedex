'use client'

import React from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "react-bootstrap";

export default function NavbarDark() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                <Container >
                    <Navbar.Brand>Pokédex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/sobre">Sobre</Nav.Link>
                            <Nav.Link href="/region">Região</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar"
                                className="me-2"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                            <Button variant="light">
                                <Link className='text-decoration-none text-black' href={`${searchTerm}`}>
                                    Pesquisar
                                </Link>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}