import React, { useEffect, useState } from 'react'
const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res =>  res.json())
            .then(posts => {
                setPosts(posts)
            })

    },[type])
    return (
        <div>
            {tabs.map(tab => {
                return <button key = {tab}
                    style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
                    onClick={ ()=> setType(tab)}
                >
                    {tab}
                </button>
            })}
            <div>
                {posts.map(item => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </div>
        </div>
        
    );
}

export default Content;