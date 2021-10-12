/* 
- redirect a user into signup page when accessing an unkown link 
- redirect a user into signup page when there is no jwt from local storage meaning they're logged out
*/
import Link from 'next/link'
import { useRouter } from "next/router";
import {useEffect} from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect( () => {
        router.push('/signup');
    }
  ,[])
  
  return (
      null
  )
}
 
export default NotFound;