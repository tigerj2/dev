import React from 'react'
import img from './../profile.jpg'
import ReactBootstrap, {FormControl, Form, NavDropdown,Nav, Navbar, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
import { Component } from 'react'

class Navbars extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Jason Yao</span>

            <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={img} alt=""/>
            </span>
            </a>
            
            <button className="navbar-toggler" type="button" >


                <Navbar bg="dark" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                </Navbar>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#Contactme">Contact me</a>
                </li>

            </ul>
            </div>
        </nav>
        )
    }
}

export default Navbars