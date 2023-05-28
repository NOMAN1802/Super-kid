/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='error-page'>

             <div className=' text-center'>
             <h1>Oops! Something went wrong.</h1>
                <p className='text-lg fw-bold'>
                    {error?.message}
                </p>
                <Link to='/' className='btn btn-warning'>
                    Back to homepage
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;