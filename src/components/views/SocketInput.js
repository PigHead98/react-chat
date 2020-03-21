import React from "react";

export default function SocketInput ( { onSubmit, onChange, onKeyUp, value } ) {
    return (
        <form onSubmit={ onSubmit }>
            <input
                type={ "text" }
                onChange={ onChange }
                onKeyUp={ onKeyUp }
                value={ value }
            />
            <button>send</button>
        </form>
    )


};