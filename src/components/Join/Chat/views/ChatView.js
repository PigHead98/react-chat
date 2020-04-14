import React, { useState } from 'react';

import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function ChatView ( { sendMsg } ) {
    const [ input, setInput ] = useState( '' );

    function onSubmit(e) {
        e.preventDefault();
        setInput('');
        return sendMsg( input );
    }

    return <Form onSubmit={ onSubmit }>
        <FormGroup className="mb-0" inline>
            <Input
                value={ input }
                onChange={ ( e ) => setInput( e.target.value ) }
                type="text"
                className="rounded-0 border-0 section-chat__box-down__input"
                id="msg"
                name="msg"/>
            <Button color="primary"
                    className="section-chat__box-down__btn w-100 rounded-0">
                send
            </Button>
        </FormGroup>
    </Form>
}