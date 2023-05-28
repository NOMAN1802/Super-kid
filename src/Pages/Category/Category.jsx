/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from "react";
import './Category.css';
import CategoryCard from '../CategoryCard/CategoryCard';
const Category = () => {
  const [toggleState, setToggleState] = useState();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(` https://super-kid-server.vercel.app/allToysByCategory/${toggleState}`)
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, [toggleState]);
  // console.log(category);

  const toggleTab = (tabName) => {
  setToggleState(tabName);
  };
    return (
        <div className='container'>
        <h3 className='fw-bold my-2 text-center text-muted'>Category</h3>
        <div className="container border my-2">
        
        <div className="bloc-tabs">
          <button
            className={toggleState === "Marvel" ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab("Marvel")}
          >
            Marvel
          </button>
          <button
            className={toggleState === "X-men" ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab("X-men")}
          >
           X-men
          </button>
         
          <button
            className={toggleState === "Dragon ball" ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab("Dragon ball")}
          >
            Dragon ball
          </button>
        </div>
    
        <div className="content-tabs">
         
          <div
            className={toggleState === "Marvel" ? "content  active-content" : "content"}
          >
            
           <div className='container'>
            <div className='row'>
              
             {category.map ((toy) => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)}
              
  
            </div>
  
           </div>
          </div>
    
          <div
            className={toggleState === "X-men" ? "content  active-content" : "content"}
          >
             <div className='container'>
            <div className='row'>
              
             {category.map ((toy) => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)}
              
  
            </div>
  
           </div>
          </div>
    
          <div
            className={toggleState === "Dragon ball" ? "content  active-content" : "content"}
          >
             <div className='container'>
            <div className='row'>
              
             {category.map ((toy) => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)}
              
  
            </div>
  
           </div>
          </div>
        </div>
      </div>
     
      </div>
    );
};

export default Category;