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
            <div className="">
                <div className="relative border rounded-lg w-96 shadow-md ml-4">
                    <img className ="absolute bottom-3 left-3" src="Email.svg" alt="Email"></img>
                    <input
                        type="email"
                        className="block whitespace-normal break-words w-64 p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-0 pl-12"
                        value={postValue}
                        onChange={e => setPostValue(e.target.value)}
                        placeholder="What's on your mind?" />
                    <button
                        className="absolute bottom-2.5 right-3 pl-5 pr-5 text-white bg-Turkey-500 rounded-md hover:bg-Turkey-600"
                        disabled={!postValue} 
                        onClick={onPostClicked}>Gobble
                    </button> 
                </div>

                {/* this is how posts shall look like */}
                <div>
                    <div>
                        <img></img>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                    <hr></hr>
                    <p></p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newsfeed;
