/*
- create states for posts 
- create a function that handles the resizing of input post field 
    - been wasting a lot of time on this one only to discover there's an npm package for this 
    - lesson learned: always look for npm package first when implementing a feature

*/
import React, {useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link'

function newsfeed() {
    const [ postValue, setPostValue ] = useState("");

    const onPostClicked = async() => {

    }

    return (
        <div className="">
            <nav className="">
                <img className ="w-8 h-8" src="" alt="Logo"></img>
                <Link href="/css/">Home</Link> |
                <a className="" href="/js/">JavaScript</a> 
                <a className="" href="/jquery/">jQuery</a>
            </nav>
            <div className="">
                <div className="relative border rounded-lg w-96 shadow-md ml-4">
                    <img className ="absolute bottom-3 left-3" src="Email.svg" alt="Email"></img>
                    <TextareaAutosize
                        className="resize-none overflow-hidden whitespace-normal break-words w-64 p-2 appearance-none border-2 border-white rounded focus:outline-none focus:bg-white focus:border-Turkey-0 pl-12"
                        value={postValue}
                        onChange={e => setPostValue(e.target.value)}
                        placeholder="What's on your mind?"
                        />
                    <button
                        className="absolute bottom-2.5 right-3 pl-5 pr-5 text-white bg-Turkey-500 rounded-md hover:bg-Turkey-600"
                        disabled={!postValue} 
                        onClick={onPostClicked}>Gobble
                    </button> 
                </div>

                {/* this is how posts shall look like */}
                <div className="m-16">
                    <div className="flex mb-4">
                        <img className ="mr-8 h-20 w-20 object-cover rounded-[50%]" src="Renz.jpg" alt="Renz" ></img>
                        <div>
                            <p className="">@Renz</p>
                            <p className="">Dec 21, 2012</p>
                        </div>
                    </div>
                    <div className="">
                        <hr></hr>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt, totam soluta assumenda suscipit repellat odio libero illo magni minus?</p>
                        <div className="flex gap-x-16">
                            <div className="flex items-center gap-x-4">
                                <img className =" h-4 w-4" src="Heart.svg" alt="Renz" ></img>
                                <p className="text-gray-400">200k</p>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <img className =" h-4 w-4" src="Message.svg" alt="Renz" ></img>
                                <p className="text-gray-400">2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newsfeed;
