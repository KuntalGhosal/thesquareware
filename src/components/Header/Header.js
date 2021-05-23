import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../Header/Header.css'

function Header() {
    return (
        <div  >
            <>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home" id="LogoStyle">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav activeKey="/home" className="ml-auto">
                            <Nav.Item>
                                <Nav.Link className="link-styles" href="/home">KOMPARSE WERDEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-styles" eventKey="link-1">FRAGEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-styles" eventKey="link-2">PROFIL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-styles" eventKey="link-3" >
                                    PRODUKTIONEN
                      </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button style={{ backgroundColor: '#DF88EB', color: '#000000', border: 'none', borderRadius: 8, padding: 10, fontSize: 15 }} className="link-styles1" >Anmelden</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        </div>
    )
}

export default Header
