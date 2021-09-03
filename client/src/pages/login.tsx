import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    // setting an initial values for the inputs
    const [ emailValue, setEmailValue ] = useState("");
    const [ passwordValue, setPasswordValue ] = useState("");

    const history = useHistory(); // for redirecting user

    // fetching login route when login button has been clicked 
    const onLogInClicked = async () => {
        const response = await fetch(`your url paste here`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "user 1"
            })
          });
          const results = await response.json();
    }

    return (
        <div>
            <div>
                <div>
                    <h1 className="text-7xl">Gobble your thought 250 characters a day</h1>
                </div>
                <div>
                    <div>
                        <h2>Sign In</h2>
                        <hr></hr>
                        <input
                            value={emailValue}
                            onChange={e => setEmailValue(e.target.value)}
                            placeholder="someone@gmail.com" />
                        <input
                            type="password"
                            value={passwordValue}
                            onChange={e => setPasswordValue(e.target.value)}
                            placeholder="password" />
                        <button
                            disabled={!emailValue || !passwordValue} // disable if the value of these two is blank 
                            onClick={onLogInClicked}>Log In</button> 
                        <button onClick={() => history.push('/signup')}>Create an account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
