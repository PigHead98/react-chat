import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import SocketView from './views/SocketView';
import SocketInput from './views/SocketInput';
import ReduxStore from './ReduxStore';

const removeUsersOnStore = () => {
    ReduxStore.dispatch( {
        type : "LOGOUT_USER"
    } );
    return;
};

class SocketComponent extends Component {
    constructor () {
        super();
        this.state = {
            messageValue : '',
            response : [],
            idRoom : "5e772cb9c4d8c70017da0e22",
            endpoint : "https://express-server-chat.herokuapp.com"
        };
        this.cpnMounted = false;
        this.socket = socketIOClient( this.state.endpoint );
        this.onChange = this.onChange.bind( this );
        this.onSubmit = this.onSubmit.bind( this );
    }

    async componentDidMount () {
        const { endpoint, idRoom } = this.state;
        this.cpnMounted = true;

        axios.get( endpoint + '/rooms' )
            .then( res => {
                res.data.message.map( item => {
                    if ( this.cpnMounted ) {
                        this.setState( state => {
                            return {
                                idRoom : item._id
                            }
                        } );
                    }
                    return true;
                } );

            } )
            .catch( err => console.log( err ) );

        this.socket.on( idRoom, data => {
            if ( this.cpnMounted ) {
                this.setState( state => {
                    return {
                        response : this.state.response.concat( data )
                    }
                } );
            }
        } );

    }

    onChange ( e ) {
        let value = e.target.value;
        this.setState( state => ( {
            messageValue : value
        } ) );
    }

    onSubmit ( e ) {
        e.preventDefault();
        const { messageValue, idRoom } = this.state;

        if ( !messageValue || messageValue.trim() === '' ) {
            return;
        }

        this.socket.emit( idRoom, messageValue );

        this.setState( state => ( {
            messageValue : ''
        } ) );
    }

    componentWillUnmount () {
        this.cpnMounted = false;
        this.socket.disconnect();
    }

    render () {
        const { response, messageValue } = this.state;
        const data = response.map( ( item, index ) => {
            return <SocketView key={ index }>
                { item }
            </SocketView>
        } );
        return (
            <div style={ { textAlign : "center" } }>
                {
                    response.length > 0
                        ?
                        data
                        : <p>Loading...</p>
                }
                <SocketInput
                    onSubmit={ this.onSubmit }
                    onChange={ this.onChange }
                    value={ messageValue }
                />
                <div className="text-center mt-4 change-state">
                    <u onClick={ removeUsersOnStore }>{ 'Logout!' }</u>
                </div>
            </div>
        );
    }
}

export default SocketComponent;