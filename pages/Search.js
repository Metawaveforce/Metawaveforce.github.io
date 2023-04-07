import React, { Component } from "react";


export default class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
  return(
    <section id="listings">
    <section className="search-area">
      <input type="text" name="search" onChange={this.props.onSearchChange} className="search-name"/>
      <hr id="in"></hr>
      </section>
      <section className="sortby-area">
      <span id="sp1">390 result found</span>
      </section>
      <section className="view">
        <i className="fa-solid fa-list" id="fa1" name="long" onClick={this.props.onViewBoxChange.bind(null, "long")}></i>
        <i className="fas fa-th" id="fa2" name="box" onClick={this.props.onViewBoxChange.bind(null, "box")}></i>
          </section>
      <section className="sort-options">
        <select name="sortby" className="sortby" id="sel1" onChange={this.props.change}>
        <option value="price-asc" id="op1">Lowest</option>
        <option value="price-dsc" id="op2">Highest</option>
        </select>
        </section>
        
           <section className="paganation">
                    <ul className="paganation-nums">
                      <li>Previous</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>Next</li>
                     </ul>
                  </section>
                  
                  </section>)
  }
                  
}