import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap';
import './Signup.css';
import { Link } from 'react-router-dom';
import BotImg from '../assets/avatar.jpg';

const validateImg = () => {};

function Signup() {
    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{width: "80%" , maxwidth: 500}}>
                      <h1 className='text-center'>Create Account</h1>
                      <div className='signup-profile-pic__container'>
                        <img src={BotImg} className='signup-profile-pic' alt="default-img"/>
                        <label className='image-upload-label' htmlFor="image-upload">
                          <i className='fas fa-plus-circle add-picture-icon'></i>
                        </label>
                        <input type="file" id="image-upload" hidden accept="image/png, image.jpeg"  onChange={validateImg}/>
                        {/* This Helped to Upload a image file from clipboard */}
                      </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name!" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                    <div className='py-4'>
                        <p className='text-center'>Already have an account? <Link to="/login">Login</Link> </p>
                    </div>
                    </Form>
                </Col>
                <Col md={5} className="signup_bg"></Col>
            </Row>
        </Container>
    );
}

export default Signup;