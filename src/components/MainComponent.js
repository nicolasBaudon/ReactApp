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
import { postComment, fetchDishes, fetchPromos, fetchComments } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }, /*Esta accion permite resetear las forms en la que se implemente de la forma que se implemente*/
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
})

class Main extends Component {

    constructor(props) {
        super(props);
    }

    /*cambiarEstado(dishId) {
                this.setState({ selectedDish: dishId }); ------ Esto cabiaba el selectedDish para mandar ese plato desp al DishDetail
            }*/


    componentDidMount() {   /*Este metodo se ejecuta despues de renderizar la vista. Fetchea todos lo que necesita hacerlo automaticamente*/
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {

        const HomePage = () => { /*Esto lo hace asi para despues pasarle atributos al Home*/
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((lead) => lead.featured)[0]} />
            );
        };

        const DishWithId = ({ match }) => {     /*Tambien le llega location y history pero solo usamos match*/
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment} />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <div>
                            <Switch>
                                <Route path='/home' component={HomePage} />
                                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                                <Route path='/menu/:dishId' component={DishWithId} />
                                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); /*Aca lo que hace es conectar la aplicacion con el store, con el connect y que ande el routing, con el withRouter*/