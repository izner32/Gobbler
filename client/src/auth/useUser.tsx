/* 
- create your own hook: useUser - returns an array with two elements [payload,setPayload] that grabs and set the payload from the jwt 
- import the useToken hook, grab the jwt 
- check if the token has value 
    - true: set the user as the value of token
    - false: set the user as null
- meaning if the useUser has a value, a jwt has a value too
*/
import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
    // grabbing the value of token, this token value is then grabbed into the local storage 
    const [token] = useToken();

    // assign the default value of user as the token
    const [user, setUser] = useState(() => {
        if (!token) return null;
        return token;
    });

    // set the user value everytime the token value has changed, token value would only changed when the uesr logged in or logged out 
    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(token);
        }
    }, [token]);

    // return the value of user as we would use this to determine if they are authorized to use the private pages
    return user;
}