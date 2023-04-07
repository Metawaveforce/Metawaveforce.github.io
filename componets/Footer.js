import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react';
import { render } from 'react-dom';


class Footer extends React.Component{
    constructor(props) {
      super(props)
 
      this.setState ={
        name: 'thehomeschooldev'
       }
    }

render(){
return(<>
<footer>
      <h1 className='Zill'>
       Zillow Clone
      </h1>
       </footer>
       </>)
    }
}

export default  Footer;