import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from './Hboprovider'
import ls from 'local-storage'
import {v4} from 'uuid'
import {useRouter} from 'next/router'

export default function Create() {
  const globalState = useStateContext();
  ls ( 'name', '')
    console.log (globalState)
  const router = useRouter();
  const saveUser = () => {
    let users = [] , user;
    if(  ls ('users') <1)
{
  user = {
    id: v4(),
    user: globalState.user,
    myListID:[]
  }
    users.push(user)
 ls ('users', users)
    console.log ('users;', users)
    console.log ('lsusers', ls('users'))
  }
    else{
      users = ls ('users')
      user ={
        id: v4(),
        user: globalState.user,
        myListID: []
      }
        users.push(user)
        ls('users', users)
        router.push('/login')
    }

 console.log ('users;', users)
    console.log ('lsusers', ls('users'))
        router.push('/login')
      }
    return (  
    <div className="base">
  <div className = "create-user"></div>
  <div className = "login-top"></div>
  <div className = "login-logo"></div>
  <span className="title">Property Offerings</span>
  <div className="create-user__form">
   <img className="create-user_user-img" src= {globalState.defaultUserImg}/>
  <div className="create-user__input-group">
      <label> Name</label>
      <input value={globalState.user} onChange={globalState.createUserAction} type= 'text'  className ="create-user__inputText"/>
      <div className='create-user__colors'></div>
      <div className="create-user__color 
      create-user--active"
      style={{
          background: 'rgb(131,58,180) ',
          backgound: 'linear-gradient(90deg, rgba(131,58,180,1) 5%, rgba(43,182,43,0.4318102240896359) 39%, rgba(118,69,252,1) 91%) '
      }}
      />
         <div className="create-user__color "
      style={{
        background: 'rgb(63,94,251)',
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,242,0.8463760504201681) 100%'
      }}
      />
         <div className="create-user__color "
      style={{
        background: 'rgb(238,174,221)',
        background: 'radial-gradient(circle, rgba(238,174,221,1) 4%, rgba(148,187,233,1) 100%'
      }}
      />
         <div className="create-user__color "
      style={{
        background: 'rgb(131,58,180)',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(205,29,253,0.4318102240896359) 50%, rgba(252,176,69,1) 100%'
      }}
      />
         <div className="create-user__color "
      style={{
          background: 'rgb(78,58,180) ',
          backgound: 'linear-gradient(90deg, rgba(78,58,180,1) 4%, rgba(205,23,143,0.4318102240896359) 48%, rgba(192,69,252,1) 91%)'
      }}
      />
        
      </div>
      </div>
      <div className="create-user__buttons">
  <button className="create-user__save" onClick = {saveUser}>Save</button>
  <button className="create-user__cancel">Cancel</button>
</div>
      </div>
      
  
      

          
    
      
  







)
    }
