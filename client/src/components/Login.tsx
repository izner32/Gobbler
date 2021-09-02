import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    const { emailValue, setEmailValue } = useState("");
    const { passwordValue, setPasswordValue } = useState("");

    const history = useHistory();

    const onLogInClicked = async () => {
        const response = await fetch(`your url paste here`, {
            headers: {
              Authorization: `Token ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "user 1"
            })
            method: 'POST',
          });
          const results = await response.json();
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Gobble your thought 250 characters a day</h1>
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
                            disabled={!emailValue || !passwordValue}
                            onClick={onLogInClicked}>Log In</button> 
                        <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
