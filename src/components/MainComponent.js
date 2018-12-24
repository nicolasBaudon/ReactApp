import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) }
})

class Main extends Component {

    constructor(props) {
        super(props);
    }

    /*cambiarEstado(dishId) {
                this.setState({ selectedDish: dishId }); ------ Esto cabiaba el selectedDish para mandar ese plato desp al DishDetail
            }*/


    componentDidMount() {   /*Este metodo se ejecuta antes de renderizar la vista, entonces todo lo que se necesite mostrar en la vista antes de mostrarla es bueno ponerlo en este metodo*/
        this.props.fetchDishes();
    }

    render() {

        const HomePage = () => { /*Esto lo hace asi para despues pasarle atributos al Home*/
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((lead) => lead.featured)[0]} />
            );
        };

        const DishWithId = ({ match }) => {     /*Tambien le llega location y history pero solo usamos match*/
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment} />
            );
        };

        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path='/contactus' component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); /*Aca lo que hace es conectar la aplicacion con el store, con el connect y que ande el routing, con el withRouter*/