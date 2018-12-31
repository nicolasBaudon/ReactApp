import * as ActionTypes from './ActionType';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case (ActionTypes.ADD_LEADERS):
            return { ...state, isLoading: false, errMess: null, leaders: action.payload }
        case (ActionTypes.LEADERS_LOADING):
            return { ...state, isLoading: true, errMess: null, leaders: [] }/*Con los 3 puntos indica que toma el estado que se pasa a la funcion y lo modifica devolviendo un nuevo objeto con las modificaciones realizadas, las cuales son la que se indican desp de la coma*/
        case (ActionTypes.LEADERS_FAILED):
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] }
        default: return state;
    }
}