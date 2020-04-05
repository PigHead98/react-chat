import { createStore } from 'redux';

const initialState = {
    endPoint : 'http://192.168.1.2:8888',
    currentUser : {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD_ENDPOINT' :
            return { ...state, endPoint : action.payload };
        case 'LOGIN_USER':
            return { ...state, currentUser : action.payload };
        case 'LOGOUT_USER':
            localStorage.removeItem( "token" );
            return { ...state, currentUser : {} };
        default:
            return state;
    }
};

const ReduxStore = createStore( reducer );

export default ReduxStore;