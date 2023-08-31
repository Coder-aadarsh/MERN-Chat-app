import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap';
import './Signup.css';
import { Link , useNavigate } from 'react-router-dom';
import BotImg from '../assets/avatar.jpg';
import {useSignupUserMutation} from "../services/appApi"; // its like a hook that gives us an object that gives us signup function with loading state


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [signupUser, {isLoading, error}] = useSignupUserMutation();

    //image upload states
    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert("Max file size is 1mb");
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    async function uploadImage() {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "qop1bzdh");
        try {
            setUploadingImg(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/dzskaun8s/image/upload", {
                method: "post",
                body: data,
            });
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url;
        } catch (error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        if (!image) return alert("Please upload your profile picture");
        const url = await uploadImage(image);
        console.log(url);
        //Now signing up the user -
        signupUser({name, email, password, picture: url}).then(({data})=>{
            if(data){
                console.log(data);
                // navigate to chat
                navigate("/chat");
            };
        })
    }

    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{width: "80%" , maxwidth: 500}} onSubmit={handleSignup}>
                      <h1 className='text-center'>Create Account</h1>
                      <div className='signup-profile-pic__container'>
                        <img src={imagePreview || BotImg} className='signup-profile-pic' alt="default-img"/>
                        <label className='image-upload-label' htmlFor="image-upload">
                          <i className='fas fa-plus-circle add-picture-icon'></i>
                        </label>
                        <input type="file" id="image-upload" hidden accept="image/png, image.jpeg"  onChange={validateImg}/>
                        {/* This Helped to Upload a image file from clipboard */}
                      </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name!" onChange={(e)=> setName(e.target.value)} value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter your email here!" onChange={(e)=> setEmail(e.target.value)} value={email} />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {uploadingImg? 'Signing You up ....' : 'Create Account'}
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