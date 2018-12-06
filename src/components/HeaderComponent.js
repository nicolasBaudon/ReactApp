import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {

        return (
            <> {/*Esto se llama React Fragment, retorna todos los elementos que queramos sin que el padre sea un div. Esto es porque el return tiene que devolver un solo elemento*/}
                <Navbar dark color="dark">
                    <div className="container-fluid">
                        <NavbarBrand href="/" className="titulo">Ristorante Con Fusion</NavbarBrand>
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