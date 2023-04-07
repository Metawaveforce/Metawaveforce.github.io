import {useEffect, useState} from 'react'
import { useRouter} from 'next/router'
import ls from 'local-storage';
 import { useMounted} from '../Hooks/useMounted'
// import { truncate } from 'fs';
import { sassTrue } from 'sass';

const AuthCheck = (component) =>{
    // const [ userLoggedIn, setUserLoggedIn] = useState (true);
    const router = useRouter ();
      const {hasMounted} = useMounted();
    let activeUID = ls ('activeUID');
    let users = ls('users') !== null ? ls ('users') : [];
    useEffect (() =>{
        // if (users.length >= 1)
        // router.push ('/login')
        if ( activeUID === null && users.length < 1) {
            router.push ('/create') 
        }
    }, [])
    if(users.length <=1 && activeUID !== null){
        return hasMounted ? (component) : (
            <>
            <div className = "create-user"></div>
           <div className = "login-top"></div>
           <div className = "login-logo"></div>
            </>
        );
    }
    
        else {
            return(
                <>
                <div className = "create-user"></div>
                <div className = "login-top"></div>
                <div className = "login-logo"></div>
                </>
            )
            }
            
        
            return component;
    }
   
    export default AuthCheck;
