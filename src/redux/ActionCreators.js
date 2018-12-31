import * as ActionTypes from './ActionType';
import { baseUrl } from '../compartida/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
        date: new Date().toISOString() /*el new date saca la fecha de hoy, y el toISOString la convierte en string en un formato especial*/
    }

    return fetch(baseUrl + 'comments', { /*De esta forma podemos especificar que es un POST*/
        method: 'POST',
        body: JSON.stringify(newComment), /*Siempre hay que hacerlo asi porque asi recibe la info este servidor*/
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log(error.message);
            alert("No se pudo subir el comentario");
        });
}

export const fetchDishes = () => (dispatch) => { /*Al escribir todo de esta manera se puede ver que es un thunk porque es una funcion con otra dentro que utiliza el metodo dispatch, es decir, el retorno de la funcion de afuera va a ser una funcion*/
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
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
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
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
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
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

export const fetchLeaders = () => (dispatch) => { /*Al escribir todo de esta manera se puede ver que es un thunk porque es una funcion con otra dentro que utiliza el metodo dispatch, es decir, el retorno de la funcion de afuera va a ser una funcion*/
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})

export const postFeedback = (firstName, lastName, telNum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstName: firstName,
        lastName: lastName,
        telNum: telNum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
        date: new Date().toISOString()
    }

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback), /*Siempre hay que hacerlo asi porque asi recibe la info este servidor*/
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMess = new Error(error.message);
                throw errorMess;
            })
        .then(response => response.json())
        .then(leaders => { alert('Thank you for your Feedback!\n' + JSON.stringify(leaders)) })
        .catch(error => {
            console.log(error.message);
            alert("Cant send Feedback")
        })
}