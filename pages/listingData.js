import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from "react";

import { useStateContext } from './Hboprovider';



const listingData = [
       {
           address: '501 Girard Blvd Se',
             city: 'Albuquerque',
             state: 'NM',
             rooms: '1',
             price: '10000',
             floorSpace: '900',
             amenities:[
                 'elevator',
                 'gym'
             ],
           homeType: 'Ranch',
                 image:  'https://ap.rdcpix.com/91880425ca252906d904d726164aad44l-m1347029995od-w480_h360_x2.jpg',
         },
   {
            address: '901 Greenwood',
             city: 'San Antonio',
             state: 'TX',
             rooms: '2',
             price: '12000',
             floorSpace: '1250',
             amenities:[
                 'pool',
                 'gym'
             ],
                 homeType: 'Condo',
                 image:  'https://photos.zillowstatic.com/fp/4d4257bc2e3db23ba2cf4ba9dd36fd93-p_e.jpg',
          
         },
     
         
             {
                 address: '3718 South Wallace',
                 city: 'Chicago',
                 state: 'IL',
                 rooms: '3',
                 price: '19000',
                 floorSpace: '1350',
                 amenities: [
                     'elevator',
                     'gym'
                 ],
                     homeType: 'Apartment',
                     image:  'https://www.nmhometeam.com/images/northeast-heights1-min_300_01.jpg',
             
             },
         
         
             {
                 address: '1174 East Cornerstone',
                 city: 'Pittsburgh',
                 state: 'PA',
                 rooms: '3',
                 price: '22000',
                 floorSpace: '1600',
                 amenities :[
                     'pool',
                     'gym'
                 ],
                     homeType: 'House',
                     image:  'https://remax-static.imgix.net/web/homepage/01_NewListings.jpg?ixlib=js-3.4.0&auto=format%2Ccompress&width=542&height=339&s=3ab184d9d9706bbaac934cfda095b826',
                 
             },
         
         
             {
                 address: '407 B Drive',
                 city: 'Atlanta',
                 state: 'GA',
                 rooms: '2',
                 price: '17000',
                 floorSpace: '1275',
                 amenities:[
                     'pool',
                     'gym'
                 ],
                     homeType: 'Ranch',
                     image:  'https://media.carusohomes.com/46/2021/1/18/IMG_2612.400x300.jpg',
                 
             },
         
         
             {
                 address: '88 SE Western Dr.',
                 city: 'Hayward',
                 state: 'CA',
                 rooms: '1',
                 price: '15000',
                 floorSpace: '750',
                 amenities:[
                     'elevator',
                     'pool'
                 ],
                     homeType: 'Apartment',
                     image:  'https://capi.myleasestar.com/v2/dimg-crop/63665147/660x375/63665147.jpg',
                 
             },
         
     
             {
                 address: '501 Salem Blvd Se',
                 city: 'Washington',
                 state: 'DC',
                 rooms: '3',
                 price: '25000',
                 floorSpace: '1900',
                 amenities:[
                     'pool',
                     'gym'
                 ],
                     homeType: 'House',
                     image: 'https://charlotte.axios.com/wp-content/uploads/2022/03/522-Lamar-Ave.-hot-homes-charlotte.jpeg',

                
             },
             
            
         ]
        export default listingData;