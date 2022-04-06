import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>this is for my list of {friends.length} Friends</h2>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend} name={friend} username={friend.username}></Friend>)
            }
        </div>
    );
};

export default Friends;