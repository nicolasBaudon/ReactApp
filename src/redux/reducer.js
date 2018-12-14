/*Aca creamos las pure functions*/
/*Todo lo que pone abajo los saca del main y lo pone aca porque era lo que le daba el estado a la aplicacion*/
import { DISHES } from '../compartida/dishes';
import { COMMENTS } from '../compartida/comments';
import { LEADERS } from '../compartida/leader';
import { PROMOTIONS } from '../compartida/promotion';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {  /*En ES6 se permite igualar el parametro para que cuando este no se especifique, tome el valor al que esta igualado pr default. En este caso cuando se crea el estado y se llama a la funcion por primera vez, va a tomar ese valor*/
    return state; /*No realiza ningun cambio al estado, solo esta devolviendo el mismo*/
};