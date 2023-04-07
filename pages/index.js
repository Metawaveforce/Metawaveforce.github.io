import Head from 'next/head'
import Login from '/pages/login';
import { useRouter } from 'next/router'
import { useStateContext } from '../pages/Hboprovider'
import { useEffect,} from 'react'
import MainLayout from '../componets/MainLayout';
import Headers from '../pages/Headers';
import Filters from '../pages/Filters';
import listingsData from '../pages/listingData';
import Listing from '../pages/listings'


export default function Index() {
    const globalState = useStateContext();
  const router = useRouter();
  
  useEffect( () => {
      const loggedIn = false;
  
      if( loggedIn === false) {
  
          router.push ('/')
        }
        }, )  
       return (
<MainLayout>
<Login/>
</MainLayout>
)
}




