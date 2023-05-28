/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'
import { FaFacebook, FaGooglePlusG, FaYoutube } from 'react-icons/fa';
const Footer = () => {

    return (
        <div className='footer bg-secondary text-white mt-5'>
            <div className='container'>
                <div className="row">
                    <div className='col-md-4 mt-3'>
                        <div>
                        <img className='img rounded-circle' src="https://i.ibb.co/4pwB94P/71-Kfi-Jcub6-S-AC-SL1500.jpg" alt="" />
                        <p className='text-white fw-bold'>Super <span className='text-primary'>Kid</span></p>
                        </div>
                        <small >Action figures can be found in toy stores, hobby shops, and online marketplaces. There are also specialized conventions and events dedicated to action figures and collectibles, where enthusiasts can buy, trade, and connect with fellow fans.</small>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <p className='fw-bold'>Site Links</p>
                        <p><small>Promotion</small></p>
                        <p><small>Sellers</small></p>
                        <p><small>Buyers</small></p>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <p className='fw-bold'>Social media</p>
                        <p><FaFacebook></FaFacebook></p>
                        <p><FaGooglePlusG></FaGooglePlusG></p>
                        <p> <FaYoutube></FaYoutube></p>
                    </div>
                </div>


            </div>
            <small className=' ext-white' style={{textAlign: 'center'}}>CopyRight<span>©</span>2023.All rights reserved</small>
        </div>

    );
};

export default Footer;
