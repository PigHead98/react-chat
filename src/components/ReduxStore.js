import { createStore } from 'redux';

const initialState = {
    currentUser : {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'LOGIN_USER':
            return { ...state, currentUser : action.payload };
        case 'LOGOUT_USER':
            return { ...state, currentUser : {} };
        default:
            return state;
    }
};

const ReduxStore = createStore( reducer );

export default ReduxStore;