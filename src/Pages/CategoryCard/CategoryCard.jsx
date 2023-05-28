/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import './CategoryCard.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    const {_id, picture, name, price, rating } = toy;
    const {user} = useContext(AuthContext);
    const handleDetails = (_id)=>{
        console.log('Clicked toy id:', _id);
      }
    return (
        <div className='col-sm-12 col-md-6'>
            <Card key={toy._id}>
                <Card.Img  style={{ height: '420px', width: '100%' }} variant="top" src={toy.picture} />
                <Card.Body>
                    <Card.Title>{toy.name}</Card.Title>
                    <Card.Text>
                        Price: $ {toy.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex'>
                   <div className='flex-grow-1'>
                   <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <small className="text-muted"> {toy.rating}</small>
                   </div>
                   <Link to={`/details/${_id}`}>
                   <button className='btn btn-warning' onClick={()=>handleDetails(toy._id)}>View Details</button>
                    </Link>
                    
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CategoryCard;