import {useRouter} from 'next/router'



const Headers = ( props ) => {
       const router = useRouter();
       
       const createUser = () => {
              router.push('/create')
            }

       return (<>
       <header>
      <div className="logo"> Logo</div> 
       <nav>
         <ul className="nav-head">
         <a href="#"> Create Ads</a>
         <a href="#">About Us</a>
         <a href="#">Log In</a>
         <a href="" className="register-btn"  onClick={createUser}>Register</a>
         </ul>
       </nav> 
       </header>
       </>
)}



       
       
   
   export default  Headers;