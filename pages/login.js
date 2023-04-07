import Head from 'next/head'
import Image from 'next/image'
import React, { useContext, useState } from  'react';
import { useRouter} from 'next/router'
import { useEffect} from 'react';
import ls  from 'local-storage';
import { useStateContext } from './Hboprovider'
// import { useMounted } from '../Hooks/useMounted';


export default function LoggedIn() {
     const globalState = useStateContext();
     const router = useRouter() ;
     const [ loadingUsers, setLoadingUsers] = useState (false);
     let users = ls('users') !== null ? ls('users'): []
      // let {hasMounted }= useMounted();  
     


     useEffect (() => {
       if( users < 1) {
         setLoadingUsers( false)
       }
       console.log ('load effect, users')
     }, [] )
     console.log ('declarded users', users)

     const selectUser = (id) => {
       ls('activeUID', id)
       router.push ('/')
     }
    
     const showUsers = () => {
       if ( ! loadingUsers) {
         return users.map((user) =>  {
           return(<>
     
            <img className="userimg" src= "https://randomuser.me/api/portraits/women/30.jpg" alt='tashi' onClick={selectUser}/>
            <div className="login-user__user-name">{user.user}</div>
          
          </>

           )
         })
       }
      }
    
      const createUser = () => {
        router.push ('/')
      }
    
      return (

       <div className="base">
       <div className ="login-user"></div>
       <div className = "login-top"></div>
       <div className = "login-logo"></div>
       <span className="title">Property Offerings</span>
       <div onClick={() => selectUser(users.id)}className="login-user__form" >
         {showUsers()} 
         </div>
       
     <div className="login-user__buttons">
       <button className="login-user__adult" onClick={createUser}>Rentals</button>
       <button className="login-user__adult1" onClick={createUser}>For Sale</button>

       
     </div>
     </div>

  )
}
