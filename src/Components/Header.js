import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myfav from '../Pages/Myfav.js';

export default class Header extends Component {

    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Movie Search
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/myfav">
                                    My Favourites
                              </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/myfav" component={Myfav} />
                    </Switch>
                </Router>
            </>
        );
    }
}