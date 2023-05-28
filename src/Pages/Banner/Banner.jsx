/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import hero from '../../assets/hero.json'
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';
import { FaLocationArrow, FaSearch, FaShoppingCart } from 'react-icons/fa';



const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className='col-sm-12 col-md-6'>
                    <div className='mb-4' data-aos="flip-up">
                    <h4 className='fw-bolder text-muted'>🎉 Introducing the Ultimate Toy Shop Experience! 🎉</h4>
                  <p className='text-muted mt-2'>Super kid is a best action figures toy store where can be found various action figure toys. In this toy stores, hobby shops, and online marketplaces. There are also specialized conventions and events dedicated to action figures and collectibles, where enthusiasts can buy, trade, and connect with fellow fans specially to Super Kid.</p>
                    </div>

                    <div className='mt-4' data-aos="flip-up">
                    <h4 className='fw-bolder text-muted'>🚀 Action-Packed Adventure</h4>
                  <p className='text-muted mt-2'>Bring their favorite heroes and heroines to life with our action figures! Dive into epic battles, unravel thrilling mysteries, and recreate iconic movie scenes. With highly articulated figures and detailed accessories, the possibilities for action-packed fun are endless!</p>
                    </div> 
                   <div className='d-flex text-center gap-4 mt-2'>
                     <Card className='w-25 bg-secondary' data-aos="zoom-in">
                        <p><FaLocationArrow></FaLocationArrow></p>
                        <p>Location</p>
                     </Card>
                     <Card className='w-25 bg-secondary' data-aos="zoom-in">
                        <p><FaSearch></FaSearch> </p>
                        <p>Search</p>
                     </Card>
                     <Card className='w-25 bg-secondary' data-aos="zoom-in">
                        <p><FaShoppingCart></FaShoppingCart> </p>
                        <p>Buy</p>
                     </Card>
                   </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                <Lottie className='animation' animationData={hero} loop={true} />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;