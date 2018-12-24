import * as ActionTypes from './ActionType';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case (ActionTypes.ADD_DISHES):
            return { ...state, isLoading: false, errMess: null, dishes: action.payload }
        case (ActionTypes.DISHES_LOADING):
            return { ...state, isLoading: true, errMess: null, dishes: [] }/*Con los 3 puntos indica que toma el estado que se pasa a la funcion y lo modifica devolviendo un nuevo objeto con las modificaciones realizadas, las cuales son la que se indican desp de la coma*/
        case (ActionTypes.DISHES_FAILED):
            return { ...state, isLoading: false, errMess: action.payload, dishes: [] }
        default: return state;
    }
}