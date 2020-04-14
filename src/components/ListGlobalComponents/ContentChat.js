import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './ListStyle/ContentChat.scss';

ContentText.propTypes = {
    text : PropTypes.string
};

ContentText.defaultProps = {};

export function ContentText ( { msg } ) {
    const [ text, setText ] = useState( [] );
    useEffect( () => {
        const { input } = msg;
        if ( input ) {
            setText( [ ...text, input ] );
        }

    }, [ msg,text ] );
    return (
        <div className="component-content">
            { text && text.map( ( item, index ) =>
                <p key={ index }
                   className="component-content__text text-right">
                    { item }
                </p> ) }
        </div>
    )
}