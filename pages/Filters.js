import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react';
import { render } from 'react-dom';




class Filters extends React.Component{
  constructor(props) {
    super(props)
    console.log("Hello")
    this.setState ={
      name: 'thehomeschooldev'
     }
     this.cities=this.cities.bind(this)
  }

// let [filteredData, setFilteredData]= useState('')
UNSAFE_componentWillMount(){
  this.props.PopulateAction()
}


cities(event){
  if(this.props.globalState.cities != undefined) {
    var {cities} = event.target.populateForms
    console.log(cities)
    return populateForms.map((item) =>{
      return <>
        <option key={item} value={item}>{item}</option>
        </>
       
    })

    



  }
  }
  render(){
 return cities.map((item) => {
  
 
 })
}

homeType(){
  if(this.props.globalState.homeType != undefined) {
    var {homeType} = this.props.globalState

console.log(homeType)

  }
  }
  render(){
 return homeType.map((item) => {
  return ( <>
    <option key={item} value={item}>{item}</option>
    </>
  )

 })
  
  }

rooms(){
  if(this.props.globalState.rooms != undefined) {
    var {rooms} = this.props.globalState

console.log(rooms)

  }
  }
  render(){
 return  rooms.map((item) => {
  return ( <>
    <option key={item} value={item}>{item} + BR</option>
    </>
  )

 })
}
render(){
return (<>
  <section className="filter">
   <h4 id="ele"> City</h4>
    <select name="city" className="filters neighborhood" onChange={this.props.onCityChange}>
    <option value="All">All</option>
    <option value="Albuquerque">Albuquerque</option>
    <option value="Atlanta">Atlanta</option>
    <option value="Chicago" >Chicago</option>
    <option value="Hayward">Hayward</option>
    <option value="Pittsburgh">Pittsburgh</option>
    <option value="San Antonio" >San Antonio</option>
    <option value="Washington" >Washington</option>
  
        
    </select>
    <h4 id="ele2">HomeType</h4>
   <h4 id="ele">  </h4>
    <select name="hometype" className="filters hometype"  onChange={this.props.onHomeChange}   >
    <option value= "All">All Homes</option>
  <option value= "Apartment">Apartment</option>
  <option value= "Condo">Condo</option>
  <option value= "House">House</option>
    <option value= "Ranch">Ranch</option>
    <option value= "Studio">Studio</option>
    </select>
    <h4 id="ele3">Bedrooms</h4>
    <select name="bedrooms" className="filters bedrooms" onChange={this.props.onBedroomsChange} >
    <option value="0">0+ BR</option>
    <option value="1">1+ BR</option>
    <option  value="2">2+ BR </option>
    <option  value="3">3+ BR</option>
    <option  value="4">4+ BR</option>
    </select>
    <section className="filters price">
      <section className="Title2">Price</section>
      <input type="text" name="min_price"className="min_price" id ='tri'  value={this.props.globalState.min_price}  onChange={this.props.onPriceChange} />
      <input type="text" name="max_price" className="max_price" id ='by'  value={this.props.globalState.max_price} onChange={this.props.onMaxPriceChange} />
    </section>
    <section className="filters FloorSpace">
      <section className="Title1">FloorSpace</section>
      <input type="text" name="MinfloorSpace" 
      className="min_FloorSpace" id='square'  value={this.props.globalState.MinFloorSpace}  onChange={this.props.onfloorSpaceChange}  />
      <input type="text" name="MaxfloorSpace"
       className="max_FloorSpace" id ='circle'  value={this.props.globalState.MaxFloorSpace} onChange={this.props.onMaxfloorSpaceChange} />
    </section>
    <section className="filters-amenities" >
      <section className="Title">Amenities </section>
      
      <label  htmlFor="amenities" >Elevators
    
      <input name="elevators" value="elevators"  type='checkbox' id="one" onChange={this.props.onElavatorChange} />
      </label>

      <label  htmlFor="amenities">Swimming Pool
      
      <input name="swimming_pool" value="swimming_pool" type='checkbox' id="two"  onChange={this.props.onSwimmingPoolChange} />
      </label>

      <label  htmlFor="amenities">Finished Basement
     
      <input name="finsished_basement" value="finished_basement" type='checkbox' id="three"onChange={this.props.onBasmentChange}  />
      
      </label>
      <label  htmlFor="Gym" className='Gym'>Gym
      
      <input name="gym" value="gym" type='checkbox' id="floor" onChange={this.props.onGymChange} />
      </label>

      
    </section>
    </section>
</>
 )
  }
}
  

  export default Filters;