import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import { useEffect, useState } from 'react';
import axios from "axios"


export default function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/605b3d777a3cf74918165c05");
            setPosts(res.data);
        };
        fetchPosts();
    },[])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p._id} post={p} /> 
                ))}
            </div>
        </div>
    )
}
