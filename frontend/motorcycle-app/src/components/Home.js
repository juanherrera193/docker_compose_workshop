import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Welcome to Motorcycle Store</h1>
                    <p>This is a motorcycles virtual store</p>
                </Jumbotron>
            </Container>
        )
    }

}