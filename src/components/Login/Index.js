import React, { Component } from 'react';
import axios from 'axios';
import { Login } from './Login';
import { Register } from './Register';
import { connect } from 'react-redux';
import ReduxStore from '../ReduxStore'; // can use this to dispatch redux without react-redux

import './Index.scss';

const saveDataUsersToRedux = ( { message } ) => {
    const { name, _id, avatar, email, contacts, accessToken, refreshToken } = message;

    accessToken && localStorage.setItem( "token", accessToken );
    refreshToken && localStorage.setItem( "token-refresh", refreshToken );

    ReduxStore.dispatch( {
        type : "LOGIN_USER",
        payload : { name, _id, email, avatar, contacts }
    } );
    return
};

class IndexLogin extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            isLogin : true,
            endPoint : `${ this.props.endPoint }/users`
        };
        this.onSubmit = this.onSubmit.bind( this );
        this.detectErr = this.detectErr.bind( this );
        this.changeState = this.changeState.bind( this );
    }

    async componentDidMount () {
        const { endPoint } = this.state;
        let token = localStorage.getItem( "token" ) || null;
        if ( !token ) {
            return
        }
        try {
            const dataUser = await axios( {
                method : 'get',
                url : `${ endPoint }/get-info-user-by-token`,
                headers : {
                    'Content-Type' : 'application/json',
                    'x-access-token' : token
                }
            } );
            return saveDataUsersToRedux( dataUser.data );
        } catch ( e ) {
            console.log( e.response );
        }
    }

    changeState () {
        this.setState( state => {
            return {
                isLogin : !this.state.isLogin
            }
        } );
    }

    onSubmit ( { email, psw, name } ) {

        return ( e ) => {
            e.preventDefault();
            const { isLogin, endPoint } = this.state;
            const action = isLogin ? `${ endPoint }/login` : `${ endPoint }/register`;
            let data = isLogin
                ?
                { email, password : psw }
                :
                { email, password : psw, name };
            axios( {
                method : 'post',
                url : action,
                data : data,
                headers : { 'Content-Type' : 'application/json' }
            } ).then( ( { data } ) => saveDataUsersToRedux( data ) )
                .catch( err => this.detectErr( err ) );
        }
    }

    detectErr ( err ) {
        console.log( err );
        console.log( 'something goes wrong' );
    }

    render () {
        const { isLogin } = this.state;
        return (
            <div>
                { isLogin && <Login onSubmit={ this.onSubmit }/> }
                { !isLogin && <Register onSubmit={ this.onSubmit }/> }
                <div className="text-center mt-4 change-state">
                    <u onClick={ this.changeState }>{ isLogin ? 'Register Now!!' : 'Login Now!!' }</u>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    endPoint : state.endPoint
} );

export default connect( mapStateToProps )( IndexLogin );