/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log('user in private route',user);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    if(!user){
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Ypu Are Not Logged In',
            text: 'Please login',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return <Navigate state={{from: location }} to ='/login' replace></Navigate>
};

export default PrivateRoute;