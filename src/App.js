import React from 'react';
import { connect } from 'react-redux';

import JoinController from './components/Join/JoinController';
// import SocketComponent from './components/SocketComponent';
import IndexLogin from './components/Login/Index';

import logo from './logo.svg';
import './App.css';

const ViewLogin = <div>
    <img src={ logo } className="App-logo" alt="logo"/>
    <IndexLogin/>
</div>;

function App ( { currentUser } ) {
    return (
        <div className="App">
            <header className="App-header">
                {
                    Object.keys( currentUser ).length > 0 ?
                        <JoinController/>
                        :
                        ViewLogin
                }

            </header>
        </div>
    );
}

const mapStateCurrentUserToProps = ( state ) => ( {
    currentUser : state.currentUser
} );
export default connect( mapStateCurrentUserToProps )( App );
