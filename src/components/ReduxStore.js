import { createStore } from 'redux';

const initialState = {
    endPoint : 'http://192.168.1.8:8888',
    currentUser : {},
    stateRoom : false

};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'IN_ROOM_CHAT' :
            return { ...state, stateRoom : true };
        case 'OUT_ROOM_CHAT' :
            return { ...state, stateRoom : false };
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