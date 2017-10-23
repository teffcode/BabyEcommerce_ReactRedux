import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // middleware


// esta es una porción del reducer, que recibe un pedacito del estado
// state=[] quiere decir que si es undefined retorna el estado inicial que es state=[]
const products = (state=[], action) => {
    if(action.type === 'REPLACE_PRODUCTS'){
        return action.products
    }
    return state;
}

const cart = (state=[], action) => {
    if(action.type === 'ADD_TO_CART'){
        return state.concat(action.product)
    }
    else if(action.type === 'REMOVE_FROM_CART'){
        return state.filter(product => product.id !== action.product.id )
    }
    return state;
}

// FUNCIÓN REDUCTORA SIN COMBINAR 
// const reducer = (state, action) => {
//     if(action.type === 'REPLACE_PRODUCTS'){
//         return {
//             ...state,
//             products: action.products // lo que nos llegue de la acción
//         };
//     }
//     else if(action.type === 'ADD_TO_CART'){
//         return {
//             ...state,
//             cart: state.cart.concat(action.product)
//         };
//     }
//     else if(action.type === 'REMOVE_FROM_CART'){
//         return {
//             ...state,
//             cart: state.cart.filter(product => product.id !== action.product.id )
//         };
//     }
//     return state;
// }

// Middleware
// http://redux.js.org/docs/advanced/Middleware.html
const logger = store => next => action => {
  console.log('dispatching', action); // cada que haya un dispatch 
  let result = next(action); // para que termine llamando al reducer
  console.log('next state', store.getState()); // nos muestra el estado como quedó
  return result;
}

// para crear el estado se necesita: 
// 1. la función reductora
// 2. el estado inicial
// Opcional -> Middleware
// export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));
export default createStore(combineReducers({ cart, products }), applyMiddleware(logger, thunk));