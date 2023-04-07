import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { render } from 'react-dom';
 import listingData from "../pages/listingData";



class Listings extends React.Component{
    constructor(props){ 
      super(props);
      console.log("listing",listingData)
      this.state = {
        name: 'thehomeschooldev'
   }

  }
  // loopListings(){
    // var {listingData} = this.props

      render(){
       
     return this.props.listingData.map((listings, index) =>  {
      if (this.props.globalState.view == 'box') {
        return(
          <section id="listing" className='col-md-3' key={index}>
       <section
         className="listing-results"
         style={{background: `url("${listings.image}") no-repeat center center`,}}
       >
         <div className="col-md-3">
           <section className="listing-img"></section>
           <span id="sp2">{listings.address}</span>
         </div>
 
         <section className="details">
           <div className="col-md-3"></div>
         </section>
 
         <div className="col-md-9">
           <section className="user-details">
             <section className="user-img"></section>
             <span className="user-name" id="sp3">
               Tashi Smith
             </span>
             <span className="user-post-date" id="sp4">
               4/18/2022
             </span>
             <span className="floor-space" id="fa4">
               1000ft&sup2;
             </span>
 
             <section className="listing-details"></section>
 
             <section className="bedrooms">
               <i className="fas fa-bed" id="fa5"></i>
               <span id="sp5">{listings.bedrooms}</span>
             </section>
            
 
             
             <section className="view-btn"> View Listing</section>
             <section className="bottom-info">
               <span className="bottom-price" id="sp6">
                 {listings.price}
               </span>
               <span className="local" id="sp7">
                 {listings.city},{listings.state}
               </span>
     
                             
               <i className="fas fa-map-marker-alt" id="fa6"></i>
             </section>
           </section>
         </div>
 
         <section className="View-btm">
           <div className="col-md-3">
             <div className="View Listing"></div>
           </div>
         </section>
       </section>
       

     </section>
      
        )

      }
       else if(this.props.globalState.view == 'long') { 
        
        return(
        <section id="listing" className="col-md-12" key={index}>
       <section className="listing-grid">
      <section
         className="listing-results2"
         style={{background: `url("${listings.image}") no-repeat center center`,}}
       >
        </section>
         <div className="col-md-3">
           <section className="listing-img"></section>
           <span id="sp22">{listings.address}</span>
         </div>
 
         <section className="details">
           <div className="col-md-3"></div>
         </section>
 
         <div className="col-md-9" id="user-det">
           <section className="user-details2">
             <section className="user-img"></section>
             <span className="user-name" id="sp32">
               Tashi Smith
             </span>
             <span className="user-post-date" id="sp42">
               4/18/2022
             </span>
             <span className="floor-space" id="fa42">
               1000ft&sup2;
             </span>
 
             <section className="listing-details"></section>
 
             <section className="bedrooms">
               <i className="fas fa-bed" id="fa52"></i>
               <span id="sp5">{listings.bedrooms}</span>
             </section>
            
 
             
             <section className="view-btn2"> View Listing</section>
             <section className="bottom-info">
               <span className="bottom-price" id="sp62">
                 {listings.price}
               </span>
               <span className="local" id="sp72">
                 {listings.city}, {listings.state}
               </span>
               <i className="fas fa-map-marker-alt" id="fa62"></i>
             </section>
           </section>
         </div>
 
         <section className="View-btm">
           <div className="col-md-3">
             <div className="View Listing"></div>
           </div>
         </section>
       </section>
       

     </section>

       )
      }
     



     }
      
    
      
      
     
     
      )}
 }
   
   export default Listings;
