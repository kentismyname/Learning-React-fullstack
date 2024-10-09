import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data)
        });
    }, []);

    // Function to calculate how long ago the post was created
    const timeAgo = (createdAt) => {
        const createdTime = new Date(createdAt); // Convert createdAt to Date object
        const currentTime = new Date(); // Get current time
        const diffInSeconds = Math.floor((currentTime - createdTime) / 1000); // Difference in seconds

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };

        for (const [unit, seconds] of Object.entries(intervals)) {
            const amount = Math.floor(diffInSeconds / seconds);
            if (amount >= 1) {
                return `${amount} ${unit}${amount > 1 ? 's' : ''} ago`;
            }
        }
        return 'just now';
    };

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return (
                    <div 
                        className='post' 
                        onClick={() => navigate(`/post/${value.id}`)}
                        key={key} // Add a key to each post element
                    >
                        
                        <div className='title'>{value.title} <div className='timestamp'>{timeAgo(value.createdAt)}</div></div>
                        <div className='body'>{value.postText}</div>
                        <div className='footer'>{value.username}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
