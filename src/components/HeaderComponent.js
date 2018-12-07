import React, { Component } from 'react';
import './ComponentsCss/Header.css';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; /*Para hacer los links que naveguen con el Router*/


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this); {/*Declarando esto permitimos que el metodo toggleNav pueda ser llamado usando this.toggleNav*/ }
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    render() {
        return (
            <> {/*Esto se llama React Fragment, retorna todos los elementos que queramos sin que el padre sea un div. Esto es porque el return tiene que devolver un solo elemento*/}
                <Navbar dark color="dark" expand="md"> {/* IMPORTANTE: El expand indica, en reactstrap, que la barra se va a colapsar para dispositivos mas chicos que los medianos, osea para los celulares y tablets se colapsa*/}
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} /> {/*El onClick llama a esa funcion que cambia el state a true y muestra la navegacion*/}
                        <NavbarBrand className="mr-auto" href="/" className="titulo"><img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar> {/*El isNavOpen funciona para que la barra se colapse, si es false no se muestra, si es true si*/}
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink> {/*La className nav-link, pone los botones bonitos para que se vean bien en la navegacion*/}
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>   About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container-fluid">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    };
}

export default Header;