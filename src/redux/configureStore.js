import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishesReducer';
import { Comments } from './commentsReducer';
import { Leaders } from './leadersReducer';
import { Promotions } from './promotionsReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({    /*Esta funcion combina en las cuatro propiedades que se van a pasar como props a los componentes cada unas de las funciones reducer que se tinen, y asi formar el estado completo*/
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );
    return store;
}