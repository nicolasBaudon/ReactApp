import * as ActionTypes from './ActionType';

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case (ActionTypes.ADD_PROMOS):
            return { ...state, isLoading: false, errMess: null, promotions: action.payload }
        case (ActionTypes.PROMOS_LOADING):
            return { ...state, isLoading: true, errMess: null, promotions: [] }/*Con los 3 puntos indica que toma el estado que se pasa a la funcion y lo modifica devolviendo un nuevo objeto con las modificaciones realizadas, las cuales son la que se indican desp de la coma*/
        case (ActionTypes.PROMOS_FAILED):
            return { ...state, isLoading: false, errMess: action.payload, promotions: [] }
        default: return state;
    }
}