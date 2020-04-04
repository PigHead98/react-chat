import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export function Login ( { onSubmit } ) {
    const [ email, setEmail ] = useState( '' );
    const [ psw, setPsw ] = useState( '' );
    return (
        <Form onSubmit={ onSubmit( { email, psw } ) }>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="email" className="mr-sm-2">Email</Label>
                <Input
                    value={ email }
                    onChange={ ( e ) =>
                        setEmail( e.target.value )
                    }
                    type="email" name="email" id="email"
                    placeholder="something@idk.cool"
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="password" className="mr-sm-2">Password</Label>
                <Input
                    value={ psw }
                    onChange={ ( e ) =>
                        setPsw( e.target.value )
                    }
                    type="password" name="password" id="password"
                    placeholder="don't tell!"/>
            </FormGroup>
            <Button className="mt-3" color="primary">Submit</Button>
        </Form>
    );
}
