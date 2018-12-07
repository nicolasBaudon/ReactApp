import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../compartida/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            /*selectedDish: null -- Esto lo usaba para seleccionar el plato y mandarlo al DishDetail*/
        };
    }

    /*cambiarEstado(dishId) {
                this.setState({ selectedDish: dishId }); ------ Esto cabiaba el selectedDish para mandar ese plato desp al DishDetail
            }*/

    render() {

        const HomePage = () => {
            return (
                <Home /> /*Esto lo hace asi para despues pasarle atributos al Home*/
            );
        }


        return (
            <div>
                <Header />
                {/*<Menu dishes={this.state.dishes}
                            onClick={(dishId) => this.cambiarEstado(dishId)} /> -- De esta forma llama al Menu sin el routing*/}
                {/*<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  le pone el cero para seleccionar el primer objeto del arreglo que devuelve la funcion filter, por mas que sea 1 objeto */}{/*De esta forma llamaba al DishDetail sin el routing*/}
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;