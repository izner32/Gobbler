/*
tailwind css customs
    - bg-Turkey-500 // for the color of turkey | note: 500, is for the opacity of the color 
    - font-Poppins // custom font for poppins 
*/
import React, { useState } from 'react'
import { useRouter } from "next/router";

function Signup() {
    // setting an initial values for the inputs
    const [ emailValue, setEmailValue ] = useState("");
    const [ usernameValue, setUsernameValue ] = useState("");
    const [ passwordValue, setPasswordValue ] = useState("");

    const router = useRouter(); // for redirecting user

    // fetching login route when login button has been clicked 
    const onSignUpClicked = async () => {
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
    */
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <div className="hidden md:block col-span-5 bg-Turkey-500">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-Poppins mt-12 ml-12 mr-12 leading-tight">Gobble<br/> your thoughts 250 characters per gobble</h1>
                    <img className ="md:w-[30%] lg:w-72 absolute bottom-0 ml-[20%]" src="Turkey.svg" alt="Girl in a jacket"></img>
                </div>
                <div className="col-span-12 md:col-span-7 ">
                    <div className="m-28 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20 xl:ml-24 xl:mr-24">
                        <h2 className="font-Poppins text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">Sign Up</h2>
                        <hr className="mb-6"></hr>
                        <div className="mb-6">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-500"
                                value={emailValue}
                                onChange={e => setEmailValue(e.target.value)}
                                placeholder="someone@gmail.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2">Username</label>
                            <input
                                type="text"
                                className="w-full p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-500"
                                value={usernameValue}
                                onChange={e => setEmailValue(e.target.value)}
                                placeholder="username" />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2">Password</label>
                            <input
                                className="w-full p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-500"
                                type="password"
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                placeholder="password" />
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <button
                                className="text-sm md:text-sm lg:text-base xl:text-lg p-2 pr-6 pl-6 md:mr-6 mb-6 md:-mb-0 text-white bg-Turkey-500 rounded-md hover:bg-Turkey-600"
                                disabled={!emailValue || !passwordValue} // disable if the value of these two is blank 
                                onClick={onSignUpClicked}>Sign&nbsp;Up</button> 
                            <button 
                                className="text-sm md:text-sm lg:text-base xl:text-lg p-2 pr-6 pl-6 md:mr-6 text-Turkey-500 hover:text-Turkey-800"
                                onClick={() => router.push('/login')}>I already have an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
