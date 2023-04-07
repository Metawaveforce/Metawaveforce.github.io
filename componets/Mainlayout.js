import Head from 'next/head'
import Headers from '../pages/headers';
import Filters from '../pages/Filters';
import Listings from '../pages/Listings';
import listingData from '../pages/listingData';
import Search from '../pages/Search';
import React, { Component } from "react";
import { constants } from 'crypto';
import Footer from './Footer'




class Index extends React.Component {
constructor(props){
super(props);
this.state = {
  name: "Thehomeschooldev",
  listingData,
  city: "All",
  homeType: "All",
  bedrooms: 0,
  min_price: 0,
   max_price: 10000000,
   MinFloorSpace: 0,
   MaxFloorSpace: 50000,
   elavator: false,
   gym: false,
   finished_basment: false,
   swimming_pool: false,
   filteredData: listingData,
   populateFormsData: '',
   sortby: 'price-dsc',
   view: 'box', 
   search: ''
}
this.onPriceChange = this.onPriceChange.bind(this)
this.change = this.change.bind(this)
this.onMaxPriceChange = this.onMaxPriceChange.bind(this)
this.onFloorSpaceChange = this.onFloorSpaceChange.bind(this)
 this.onMaxfloorSpaceChange = this.onMaxfloorSpaceChange.bind(this)
 this.PopulateFormsData = this.PopulateFormsData.bind(this) 
 this.onCityChange = this.onCityChange.bind(this)
 this.onHomeChange = this.onHomeChange.bind(this)
 this.onViewBoxChange = this.onViewBoxChange.bind(this)
 this.onSearchChange = this.onSearchChange.bind(this)
}
UNSAFE_componentWillMount() {
const filteredData = this.state.filteredData.sort((a, b) =>{
    return a.price - b.price

  })
  this.setState({
    listingData
  })
}
change(event){
  var name = event.target.name
  var value = event.target.value
  
  

 this.setState({
   [name] : value
 }, () => {
   console.log(this.state)
  //  this.filteredData()
 
   })

}

// filteredData(){
//  var newData = this.state.listingData.filter((item)=> {
//     return item.price >= this.state.min_price  && item >= this.state.max_price
//  }) 
//  this.setState({
//    filteredData: newData
//  }) 
// }

onPriceChange(event){
console.log(event.target.value)


 const filteredListings = this.state.filteredData.filter((item) => {
  // console.log(((item.price >= event.target.value)))


  
 return ((item.price >= event.target.value)) 

})
console.log(filteredListings)

  this.setState({
    min_price: event.target.value,
    listingData: filteredListings
   })
}



onMaxPriceChange(event){
  console.log(event.target.value)
  
  
   const filteredListings2 = this.state.filteredData.filter((item) => {
    console.log(((item.price <= event.target.value)))
  
    
   return ((item.price <= event.target.value))
  
  })
  console.log(filteredListings2)
  
    this.setState({
      max_price: event.target.value,
      listingData: filteredListings2
     })
  }


  onFloorSpaceChange(event){
    
      const filteredListings3 = this.state.filteredData.filter((item) => {

       console.log(event.target.value)

      
   return item.floorSpace >= event.target.value

    
     });     
     console.log(filteredListings3)
    
       this.setState({
        MinFloorSpace: event.target.value,
         listingData: filteredListings3
        })
     }
  
     onMaxfloorSpaceChange(event){      

        const filteredListings4 = this.state.filteredData.filter((item) => {


         return item.floorSpace <= event.target.value

       })
       console.log(filteredListings4)
      
         this.setState({
          MaxFloorSpace: event.target.value,
           listingData: filteredListings4
          })
      }


  onCityChange(event) {
  console.log("CityChange" , event.target.value)
  

  
const filteredListings5 = this.state.filteredData.filter((item) => {
      // console.log(item.city == event.target.value)
    //  console.log(item.price >= event.target.price)
    // console.log("Event.Change city",  event.target.value)
    // console.log("All" , event)
    console.log("Citystate",this.state)
     if (event.target.value !== "All") {
     
        return  item.city == event.target.value
      
      }

      if (event.target.value == "All") {
     
        return  item.city
      
      }


      // return event.target.value == item.city
      
      // if(event.target.homeType != "All") {
      //   filteredListings5 = filteredListings5.filter((item) => {
      //     return item.homeType == event.target.homeType
      //   })
      //   }
   

      // if(this.state.sortby =='price-dsc') {
      //   filteredListings5 = filteredListings5.sort(() =>{
      //     return a.price - b.price
      //   }
      // )}
      //   if(this.state.sortby =='price-asc') {
      //     filteredListings5 = filteredListings5.sort(() =>{
      //       return b.price - a.price
      //     }
      // )}
  
   })

  
   console.log("Filterlistings5", filteredListings5)
  
     this.setState({
       city: event.target.value,
       listingData: filteredListings5
      })
  }

  onHomeChange(event) {
    console.log(event.target.value)
    
   const filteredListings6 = this.state.filteredData.filter((item) => {
        
        if(event.target.value !== "All") {
          
            return item.homeType == event.target.value
          
        }

        if(event.target.value == "All") {
          
          return item.homeType
        
      }
      

    
     })
     console.log(filteredListings6)
    
       this.setState({
         homeType: event.target.value,
         listingData: filteredListings6
        })
    }

    onRoomsChange(event) {
      console.log(event.target.value)
      
     const filteredListings6 = this.state.filteredData.filter((item) => {
          
          if(event.target.homeType !== "All") {
            
              return item.homeType == this.state.bedrooms
            
          }
        
   
      
       })
       console.log(filteredListings6)
      
         this.setState({
           bedrooms: event.target.value,
           listingData: filteredListings6
          })
      }
  

  
PopulateFormsData(){
  console.log("PopState",this.state)
  
  var cities = this.state.listingData.map((item) => {
    return item.city
  }),

 cities = new Set(this.cities)
 cities = [...cities]
//  cities = cities.sortby()
  
 
  var homeType = this.state.listingData.map((item) => {
    return item.homeType
   
  })

 homeType = new Set(homeType)
 homeType = [...homeType]
//  homeType = homeType.sortby()
 

 
  var rooms = this.state.listingData.map((item) => {
    return item.rooms
  })


 rooms = new Set(rooms)
 rooms = [...rooms]
//  rooms = rooms.sortby

 this.setState({
  populateFormsData: [
    homeType,
    rooms,
    cities
 ]
  }, 
  () => {
    console.log("PopState",this.state)

  }
  )

}
onViewBoxChange(viewName){      
 this.setState({
view: viewName
 }) 
}

onSearchChange(event){      
  const filteredListings10= this.state.filteredData.filter((item) => {
   var city = item.city.toLowerCase()
   var searchText = event.target.value.toLowerCase()
   var n = city.match(searchText)

  if(n !== null){
    return true
  }
 })
 console.log(filteredListings10)

   this.setState({
     search: event.target.value,
     listingData: filteredListings10
    })
}
onCheckboxElavatorChange(event) {
const filteredListings10 = this.state.filteredData.filter((item) => {
    
  if(event.target.value !== false){
    return event.target.value == this.state.elavator
  }
 

  })
  console.log(filteredListings10)
 
    this.setState({ 
      elavator: event.target.value,
      listingData: filteredListings10
    
     })
 }

 onCheckboxGymChange(event) {
  const filteredListings11 = this.state.filteredData.filter((item) => {
      
    if(event.target.value !== false){
      return item.amenities == event.target.value
    }
   
  
    })
    console.log(filteredListings11)
   
      this.setState({ 
        gym: event.target.value,
        listingData: filteredListings11
      
       })
   }
   onCheckboxBasmentChange(event) {
    const filteredListings12 = this.state.filteredData.filter((item) => {
        
      if(event.target.value !== false){
        return item.amenities == event.target.value
      }
     
    
      })
      console.log(filteredListings12)
     
        this.setState({ 
          finished_basment: event.target.value,
          listingData: filteredListings12
        
         })
     }
     
     onCheckboxSwimmingPoolChange(event) {
      const filteredListings13 = this.state.filteredData.filter((item) => {
          
        if(event.target.value !== false){
          return item.amenities == event.target.value
        }
       
      
        })
        console.log(filteredListings13)
       
          this.setState({ 
            swimming_pool: event.target.value,
            listingData: filteredListings13
          
           })
       }
       


render(){
return(
<>
<Headers></Headers>
<Search change={this.change} onViewBoxChange={this.onViewBoxChange} onSearchChange={this.onSearchChange}></Search>
<Filters change={this.change} globalState={this.state} onPriceChange={this.onPriceChange}  onMaxPriceChange={this.onMaxPriceChange}
 onfloorSpaceChange={this.onFloorSpaceChange} onMaxfloorSpaceChange={this.onMaxfloorSpaceChange}  PopulateAction={this.PopulateFormsData} onCityChange={this.onCityChange} onHomeChange={this.onHomeChange} onElavatorChange={this.onCheckboxElavatorChange}  onSwimmingPoolChange={this.onCheckboxSwimmingPoolChange} onBasmentChange={this.onCheckboxBasmentChange} onGymChange={this.onCheckboxGymChange} ></Filters>
<Listings listingData={this.state.listingData}  change={this.change}  globalState={this.state}></Listings>
<Footer></Footer>
</>
)
}
}
export default Index;


