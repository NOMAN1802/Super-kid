/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToysDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useTitle('All Toys:Details');
    useEffect(() => {
        fetch(` https://super-kid-server.vercel.app/toys/${id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [id]);
    return (
        <div className='container my-5'>

            <h2 className='text-center text-muted my-5'>Single Toy Details</h2>

            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <Card>

                        <Card.Img className='picture' variant="top" src={details.picture} />
                        <Card.Title className='title'>{details.name}</Card.Title>
                    </Card>
                </div>
                <div className='col-sm-12 col-md-6' >
                    <h4 className='text-secondary fw-bolder'>Toy Name:</h4>
                    <p><small className='text-danger-emphasis'>{details.name}</small></p>
                    <h4 className='text-secondary fw-bolder'>Seller Name:</h4>
                    <p><small className='text-danger-emphasis'>{details.seller_name}</small></p>
                    <h4 className='text-secondary fw-bolder'>Seller Email:</h4>
                    <p><small className='text-danger-emphasis'>{details.email}</small></p>
                    <h4 className='text-secondary fw-bolder'>Price:</h4>
                    <p><small className='text-danger-emphasis'>$ {details.price} USD</small></p>
                    <h4 className='text-secondary fw-bolder'>Rating:</h4>
                    <p><small className='text-danger-emphasis'>{details.rating}</small></p>
                    <h4 className='text-secondary fw-bolder'>Available:</h4>
                    <p><small className='text-danger-emphasis'>{details.available_quantity}</small></p>
                    <h4 className='text-secondary fw-bolder'>Details:</h4>
                    <p><small className='text-danger-emphasis'>{details.detail_description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;
