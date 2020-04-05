import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function MenuView ( { name = 'An' } ) {
    return (
        <div className="menu-view">
            <Container>
                <Row className="align-content-center justify-content-center">
                    <Col xs="12" md="10" className="d-flex flex-column justify-content-center">
                        <h2>Welcome to ChatBox! <br/><span className="menu-view__info-user">{ name }</span></h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};