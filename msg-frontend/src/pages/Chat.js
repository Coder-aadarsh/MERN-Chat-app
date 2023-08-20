import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Message from '../components/Message';


function Chat() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}><SideBar/></Col>
        <Col md={8}><Message/></Col>
      </Row>
    </Container>
  )
}

export default Chat