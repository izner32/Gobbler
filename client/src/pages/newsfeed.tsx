import React, {useState} from 'react'

function newsfeed() {
    const [ postValue, setPostValue ] = useState("");

    const onPostClicked = async() => {

    }


    return (
        <div className="">
            <nav className="">
                <a className="" href="/html/">HTML</a> |
                <a className="" href="/css/">CSS</a> |
                <a className="" href="/js/">JavaScript</a> 
                <a className="" href="/jquery/">jQuery</a>
            </nav>
            <div className="grid grid-cols-6">
                <div>
                    <img className="">
                    </img>
                </div>
                <div className="relative">
                    <img className ="absolute bottom-3 left-3" src="Email.svg" alt="Email"></img>
                    <input
                        type="email"
                        className="w-full p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-500 pl-12"
                        value={postValue}
                        onChange={e => setPostValue(e.target.value)}
                        placeholder="What's on your mind?" />
                </div>
                <button
                    className="pl-5 pr-5 text-white bg-Turkey-500 rounded-md hover:bg-Turkey-600"
                    disabled={!postValue} 
                    onClick={onPostClicked}>Gobble</button> 
            </div>
        </div>
    )
}

export default newsfeed;
