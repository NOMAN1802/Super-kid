/* eslint-disable no-unused-vars */
import React from 'react';
import { Badge } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const HotDeal = () => {
    return (
        <div className='container'>
            <Badge bg="warning" text="light">
                Hot Deal
            </Badge>{' '}
            <Marquee speed={100}>
                <p>This amazing super hero could be yours.. Hurry up & grab it little champ.So what are you thinking ,pickup your phone and order now...</p>
            </Marquee>
        </div>
    );
};

export default HotDeal;