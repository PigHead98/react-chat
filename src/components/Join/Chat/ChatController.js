import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import './views/ChatView.scss';
import ChatView from './views/ChatView.js';
import { ContentText } from '../../ListGlobalComponents/ContentChat';

const formatDate = ( time ) => {
    let getDate = new Date( time );
    let hours = `0${ getDate.getHours() }`.slice( -2 );
    let min = `0${ getDate.getMinutes() }`.slice( -2 );
    // let seconds = `0${ getDate.getSeconds() }`.slice( -2 );
    return `${ hours }:${ min }`;
};

export default function ChatController () {
    const [ msg, setMsg ] = useState( {} );
    const [ listMsg, setListMsg ] = useState( [] );

    const sendMsg = ( input ) => {
        let timestamp = Date.now();
        let formatTime = formatDate( timestamp ); //hh-mm
        let newMsg = {
            input,
            formatTime,
            timestamp
        };
        setMsg( newMsg );
        setListMsg( [ ...listMsg, newMsg ] );
    };

    return ( <section className="section-chat">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="section-chat__box-up d-flex flex-column justify-content-end bg-white w-100">
                        { msg.input && <ContentText msg={ msg }/> }
                    </div>
                </Col>
                <Col sm="12">
                    <div className="section-chat__box-down bg-white">
                        <ChatView sendMsg={ sendMsg }/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section> )
}