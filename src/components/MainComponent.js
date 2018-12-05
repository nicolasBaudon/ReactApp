import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../compartida/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    cambiarEstado(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container-fluid">
                        <NavbarBrand href="/" className="titulo">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.cambiarEstado(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> {/* le pone el cero para seleccionar el primer objeto del arreglo que devuelve la funcion filter, por mas que sea 1 objeto */}
            </div>
        );
    }
}

export default Main;