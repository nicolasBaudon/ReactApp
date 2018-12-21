import { COMMENTS } from '../compartida/comments';
import * as ActionTypes from './ActionType';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString(); /*el new date saca la fecha de hoy, y el toISOString la convierte en string en un formato especial*/
            return state.concat(comment); /*Esta funcion concatena en el array del state con el nuevo comentario*/
        default: return state;
    }
}

