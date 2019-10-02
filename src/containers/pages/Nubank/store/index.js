import { createStore } from 'redux';

const INITIAL_STATE = {
    data: 'Login'
}

function dados(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_DADOS':
            return {...state, data: action.name};
        
        default:
            return state;
    }
}

const store = createStore(dados);

export default store;