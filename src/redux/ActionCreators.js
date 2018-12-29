import * as ActionTypes from './ActionType';
import { baseUrl } from '../compartida/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const fetchDishes = () => (dispatch) => { /*Al escribir todo de esta manera se puede ver que es un thunk porque es una funcion con otra dentro que utiliza el metodo dispatch, es decir, el retorno de la funcion de afuera va a ser una funcion*/
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => { /*Al escribir todo de esta manera se puede ver que es un thunk porque es una funcion con otra dentro que utiliza el metodo dispatch, es decir, el retorno de la funcion de afuera va a ser una funcion*/

    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commetsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => (dispatch) => { /*Al escribir todo de esta manera se puede ver que es un thunk porque es una funcion con otra dentro que utiliza el metodo dispatch, es decir, el retorno de la funcion de afuera va a ser una funcion*/
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})