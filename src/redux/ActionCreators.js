import * as ActionTypes from './ActionType';
import { DISHES } from '../compartida/dishes'; /*Mueve esto aca para que el creador de la accion sea el responsable de darle la info esa al dishesredicer*/

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

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000)
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
