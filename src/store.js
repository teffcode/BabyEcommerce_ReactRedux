import { createStore } from 'redux';

// función reductora
const reducer = (state, action) => {
    if(action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }
    return state;
}

// para crear el estado se necesita: 
// 1. la función reductora
// 2. el estado inicial
export default createStore(reducer, { cart: [] });