import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import SocketView from './views/SocketView';
import SocketInput from './views/SocketInput';

class SocketComponent extends Component {
    constructor () {
        super();
        this.state = {
            messageValue : '',
            response : [],
            idRoom : "5e76242b8163472ec88fc4a0",
            endpoint : "http://192.168.1.8:8888/"
        };

        this.onChange = this.onChange.bind( this );
        this.onSubmit = this.onSubmit.bind( this );
    }

    componentDidMount () {
        const { endpoint, idRoom } = this.state;
        const socket = socketIOClient( endpoint );

        socket.on( idRoom, data => {
            this.setState( state => {
                return {
                    response : this.state.response.concat( data )
                }
            } );
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
        const { messageValue, endpoint, idRoom } = this.state;
        const socket = socketIOClient( endpoint );

        if ( !messageValue || messageValue.trim() === '' ) {
            return;
        }

        socket.emit( idRoom, messageValue );

        this.setState( state => ( {
            messageValue : ''
        } ) );
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
            </div>
        );
    }
}

export default SocketComponent;