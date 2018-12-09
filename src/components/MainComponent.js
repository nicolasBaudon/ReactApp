import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { DISHES } from '../compartida/dishes';
import { COMMENTS } from '../compartida/comments';
import { LEADERS } from '../compartida/leader';
import { PROMOTIONS } from '../compartida/promotion';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
            /*selectedDish: null -- Esto lo usaba para seleccionar el plato y mandarlo al DishDetail*/
        };
    }

    /*cambiarEstado(dishId) {
                this.setState({ selectedDish: dishId }); ------ Esto cabiaba el selectedDish para mandar ese plato desp al DishDetail
            }*/

    render() {

        const HomePage = () => { /*Esto lo hace asi para despues pasarle atributos al Home*/
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((lead) => lead.featured)[0]} />
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
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> {/*Otra forma de pasar atributos a los componentes usando Routing*/}
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;