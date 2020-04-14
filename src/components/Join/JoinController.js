import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import MenuView from './HomePage/views/MenuView';
import ContentView from './HomePage/views/ContentView';
import ChatController from './Chat/ChatController';
import ModalShowContactComponent from '../ListGlobalComponents/ModalsComponent';
import CardInfoUser from '../ListGlobalComponents/CardInfoUser';
import './HomePage/views/HomePage.scss';

const ucFirst = ( text ) => {
    if ( typeof text === "string" ) {
        return text.toLowerCase()
            .split( ' ' )
            .map( ( s ) => s.charAt( 0 ).toUpperCase() + s.substring( 1 ) )
            .join( ' ' );
    }
    return text
};

class JoinController extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            isOpenModal : false,
            infoUserContact : null,
            endPoint : `${ this.props.endPoint }/users`
        };
        this.onSearchContact = this.onSearchContact.bind( this );
    }

    onSearchContact ( data ) {
        return async ( e ) => {
            e.preventDefault();
            const { isOpenModal, endPoint } = this.state;
            const { currentUser } = this.props;
            let token = localStorage.getItem( "token" ) || null;

            if ( !data ) {
                return
            }
            //can not find myself
            if ( data !== currentUser.email ) {
                try {
                    const contact = await axios( {
                        method : 'get',
                        url : `${ endPoint }/search_contact/${ data }`,
                        headers : {
                            'Content-Type' : 'application/json',
                            'x-access-token' : token
                        }
                    } );
                    this.setState( state => {
                        return {
                            infoUserContact : contact.data.message || null
                        }
                    } )
                } catch ( e ) {
                    console.log( e );
                }
            }

            this.setState( state => {
                return {
                    isOpenModal : !isOpenModal
                }
            } )
        }
    }

    render () {
        const { isOpenModal, infoUserContact } = this.state;
        const { dispatch, currentUser, stateRoom } = this.props;

        let name = ucFirst( currentUser.name );
        let cardInfoUser = infoUserContact ?
            <CardInfoUser
                titleCard={ ucFirst( infoUserContact.name ) }
                descriptionCard={ "Click to start conversation!!!" }
            />
            :
            null
        ;

        const contentView = stateRoom ?
            <section>
                <ContentView onSubmit={ this.onSearchContact }/>

                <ModalShowContactComponent
                    titleModal={ "Result contact" }
                    statusModal={ isOpenModal }
                    toggle={ () => (
                        this.setState( state => {
                            return {
                                isOpenModal : !isOpenModal
                            }
                        } )
                    ) }
                    cardInfoUser={ cardInfoUser }
                />
            </section> : <ChatController/>;

        return (
            <div style={ { textAlign : "center" } }>
                <MenuView name={ name }/>
                <div className="w-100 my-5"/>

                { contentView }

                <div className="text-center mt-4 change-state">
                    <u
                        onClick={ () => dispatch( {
                            type : "LOGOUT_USER"
                        } ) }
                    >
                        { 'Logout!' }
                    </u>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ( {
    currentUser : state.currentUser,
    endPoint : state.endPoint,
    stateRoom : state.stateRoom
} );

export default connect( mapStateToProps )( JoinController );