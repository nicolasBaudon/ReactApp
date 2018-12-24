import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishesReducer';
import { Comments } from './commentsReducer';
import { Leaders } from './leadersReducer';
import { Promotions } from './promotionsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({    /*Esta funcion combina en las cuatro propiedades que se van a pasar como props a los componentes cada unas de las funciones reducer que se tinen, y asi formar el estado completo*/
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({  /*De esta forma se habilitan reducers y action creators para manejar el estado con las forms, y ademas se llena esa propiedad como parte del estado cuando se envian los datos de una form. Solo se llena cuando usas la etiqueta Form en el componente y le pones el model como propiedad*/
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger) /*Esta funcion es el segundo parametro del create store, es una funcion enhancer, es decir que modifican el camino al store, y este parametro es el que crea el middleware que va a ser tipo thunk*/
    );
    return store;
}