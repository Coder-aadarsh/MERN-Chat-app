import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <Row>
      <Col md={6} className='d-flex justify-content-center flex-column align-items-center'>
        <div>
          <h1>Share the World with your friends</h1>
          <p>This Chat app lets you connect with your peeps</p>
          <LinkContainer to="/chat">
            <Button >Get Started <i className='fas fa-comments home-message-icon'></i></Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className='home_bg'></Col>
    </Row>
  );
}

export default Home;
