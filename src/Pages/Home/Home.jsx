/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import HotDeal from '../HotDeal/HotDeal';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import useTitle from '../../hooks/useTitle';


const Home = () => {

    const[toys, setToys] =useState([]);
    useTitle('Home')
    useEffect(()=>{
        fetch(' https://super-kid-server.vercel.app/toys')
        .then(res =>res.json())
        .then(data =>{
            setToys(data);
        })
    },[])
    return (
        <div className='my-5'>
            <Banner></Banner>
            <HotDeal></HotDeal>
            <h3 className='text-center text-muted container mt-4'>Top Rated</h3>
            <div className='container'>
            <div className="row">
               
                    {
                        toys.map(toy =><Gallery 
                            key={toy._id}
                            toy ={toy} 
                            ></Gallery>)
                    }
                  
                
            </div>
                    
            </div>
            <Category></Category>
            
            </div>
    );
};

export default Home;