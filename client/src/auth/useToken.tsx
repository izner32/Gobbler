/* 
- create a hook that grabs the value of token or set the value of token from the local storage
- local storage is where we set the jwt for each user
*/
import React, { useState } from 'react'

function useToken() {
    const [token,setTokenInternal] = useState(
        localStorage.getItem("token") // default value of token is the one we got from the browser
    );

    // we create our own version of setToken since we also wanted to add/update the token into the local storage
    const setToken = newToken => {
        localStorage.setItem("token", newToken);
        setTokenInternal(newToken);
    }
    
}

export default useToken
