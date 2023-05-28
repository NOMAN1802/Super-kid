/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Login.css'
import login from '../../assets/login.json'
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebaseConfig/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location', location)
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const[user,setUser] = useState(null);
    const auth = getAuth(app);

    const handleLogin = event => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                setError('');
                    event.target.reset();
                   { setSuccess &&
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'User has been login successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })}
            })
            .catch(error => {
                console.error(error.message);
                setError('Email password does not matched');
            })
    }
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const LoggedInUser = result.user;
            console.log(LoggedInUser);
            setUser(LoggedInUser)
            
        })
        .catch(error =>{
            console.log('error',error.message);
        })
    };

      console.log(user);

    const handleSingOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-8 my-5'>
            <Container className='w-25 mx-auto '>
            <h3 className='fw-bold text-secondary'>Please <span className='text-primary'>Login</span></h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                
                <br />
                <Form.Text className="text-secondary">
                    Do not Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                <p>{error}</p>
                </Form.Text>
            </Form>
            <div>
                <h4 className='text-muted fw-bolder' >Or</h4>
               <div>
              {user? <Button onClick={handleSingOut} className='mb-2' variant="outline-secondary"><FaSignOutAlt></FaSignOutAlt>
              SignOut </Button> :
              <>
              <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
                <br />
              </>
              }
               </div>
            </div>
        </Container>
            </div>
            <div className='col-sm-12 col-md-4'>
            <Lottie animationData={login} loop={true} />;
            </div>
          </div>
        </div>
    );
};

export default Login;