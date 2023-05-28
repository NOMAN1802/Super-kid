/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const Gallery = ({ toy }) => {
    const { picture, name } = toy;
    return (

       
        <div className="col-sm-12 col-md-4">
         <Card className="w-75 text-white  border-3 border-danger my-4">
            <Card.Img src={toy.picture} style={{width:"100%",height:"400px"}} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='text-center text-muted'><h3>{toy.name}</h3></Card.Title>

            </Card.ImgOverlay>
        </Card>
       </div>
      


    );
};

export default Gallery;
