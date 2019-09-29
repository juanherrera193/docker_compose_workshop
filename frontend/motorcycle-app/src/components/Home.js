import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

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