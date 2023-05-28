/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Register.css';
import register from '../../assets/registration.json'
import Lottie from "lottie-react";
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Register');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        //  validation 
       
         if(password.length < 6 ){
            setError('Please add at least 6 character in your password');
            return;
        }

            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    // console.log(createdUser);
                    setError('');
                    event.target.reset();
                    setSuccess('User has been created successfully');
                    {
                        setSuccess && 
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'User has been login successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    
                })
                .catch(error => {
                    console.error(error.message);
                    setError(error.message);

                })
        };
        const handleAccepted = event => {
            setAccepted(event.target.checked);
        }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-8 my-3'>
                <Container className='w-50 mx-auto register'>
                <h3 className='text-bolder text-secondary'>Please <span className='text-primary'>Register</span></h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL </Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name='accept'
                            label={<>Accept <Link to='/'>Terms and Conditions</Link></>} />
                            
                    </Form.Group>

                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className='text-secondary'>
                        Already Have An Account?
                        <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className='text-success'>
                        <p>{success}</p>
                    </Form.Text>
                    <Form.Text className='text-danger'>
                        <p >{error}</p>
                    </Form.Text>

                </Form>
            </Container>

                </div>
                <div className='col-sm-12 col-md-4 '>
                <Lottie className='animation' animationData={register} loop={true} />;
                </div>
            </div>
        </div>
    );
};

export default Register;