import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ContentView ( { onSubmit, onChange, onKeyUp, value } ) {
    const [ search, setSearch ] = useState( '' );

    return (
        <div className="content-view">
            <Container onSubmit={ onSubmit( search ) }>
                <Row className="align-content-center justify-content-center">
                    <Col xs="10">
                        <Form>
                            <FormGroup className="mb-0" inline>
                                <Label for="valueFind" className="content-view__label">Find Contact</Label>
                                <Input
                                    value={ search }
                                    onChange={ ( e ) => setSearch( e.target.value ) }
                                    type="text"
                                    className="rounded-0 border-0 content-view__input"
                                    id="valueFind"
                                    name="valueFind" placeholder="Email or Phone"/>
                            </FormGroup>
                            <Button color="primary"
                                    className="content-view__btn content-view__btn--find-contact w-100 rounded-0">
                                Find
                            </Button>
                        </Form>

                    </Col>
                    <div className="w-100 my-3 content-view__text--Or">___Or___</div>
                    <Col xs="8">
                        <Button color="success" className="content-view__btn content-view__btn--find-contact">Start chat
                            with bot</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};