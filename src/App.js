import React from 'react';
import { connect } from 'react-redux';

import SocketComponent from './components/SocketComponent';
import Index from './components/Login/Index';

import logo from './logo.svg';
import './App.css';

function App ( { currentUser } ) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
                {
                    Object.keys(currentUser).length > 0 ?
                        <SocketComponent/>
                        :
                        <Index/>
                }
            </header>
        </div>
    );
}

const mapStateCurrentUserToProps = ( state ) => {
    return {
        currentUser : state.currentUser
    }
};
export default connect( mapStateCurrentUserToProps )( App );
