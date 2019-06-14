import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
export class Saved extends Component {
    state = {
        books: []
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">Hello</Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;
