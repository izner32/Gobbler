/*
tailwind css customs
    - bg-Turkey-500 // for the color of turkey | note: 500, is for the opacity of the color 
    - font-Poppins // custom font for poppins 
*/
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

    /* TODO: 
            - study styling input fields 
            - make it responsive
    */
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <div className="hidden md:block col-span-5 bg-Turkey-500">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-Poppins mt-12 ml-12 mr-12 leading-tight">Gobble<br/> your thoughts 250 characters per gobble</h1>
                    <img className ="md:w-[30%] lg:w-72 absolute bottom-0 ml-[20%]" src="Turkey.svg" alt="Girl in a jacket"></img>
                </div>
                <div className="col-span-12 md:col-span-7 ">
                    <div className="m-28 md:ml-16 md:mr-16 ">
                        <h2 className="font-Poppins text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">Sign In</h2>
                        <hr className="mb-6"></hr>
                        <div className="mb-6">
                            <label className="block font">Email</label>
                            <input
                                type="email"
                                className="block w-auto"
                                value={emailValue}
                                onChange={e => setEmailValue(e.target.value)}
                                placeholder="someone@gmail.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block">Password</label>
                            <input
                                className=""
                                type="password"
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                placeholder="password" />
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <button
                                className="text-sm md:text-sm lg:text-base xl:text-lg p-2 pr-6 pl-6 md:mr-6 mb-6 md:-mb-0 text-white bg-Turkey-500 rounded-md"
                                disabled={!emailValue || !passwordValue} // disable if the value of these two is blank 
                                onClick={onLogInClicked}>Log&nbsp;In</button> 
                            <button 
                                className="text-sm md:text-sm lg:text-base xl:text-lg p-2 pr-6 pl-6 md:mr-6 text-Turkey-500 hover:text-white hover:bg-Turkey-500 hover:rounded-md"
                                onClick={() => history.push('/signup')}>Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
