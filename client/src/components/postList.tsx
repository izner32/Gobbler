import React, {useState} from 'react'

function postList() {
    const [postList,setPostList] = useState([]);

    const onLogInClicked = async () => {
        const response = await fetch(``)
        const data = await response.json();

        // after fetching store this grabbed data now
        setPostList(data);
    }

    return (
        <div>
            
        </div>
    )
}

export default postList
