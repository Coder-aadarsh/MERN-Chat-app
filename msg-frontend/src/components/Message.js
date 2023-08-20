import React from 'react';
import { FormControl, FormGroup, Form,Row, Col, Button } from 'react-bootstrap';
import "./Message.css";

function Message() {
    const handleSubmit = (e) =>{
        e.preventDefault();
    };
  return (
    <div>
        <div className='message-output'> </div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <FormGroup>
                        <FormControl type="text" placeholder='Your Message....'></FormControl>
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button varient="primary" type="submit" style={{width: "100%", backgroundColor:"orange"}}>
                        <i className='fas fa-paper-plane'/>
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Message