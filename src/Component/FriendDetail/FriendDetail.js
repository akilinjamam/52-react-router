import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const { detail } = useParams();
    console.log(detail)
    const [friend, setFriend] = useState({});

    const url = `https://jsonplaceholder.typicode.com/users/${detail}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, [])



    // let params = useParams()
    return (
        <div>
            <h2>details about dosto : {detail}</h2>
            <p>name: {friend.name}</p>
            <p>Email: {friend.email}</p>
            <p>website: {friend.website}</p>
            <p>Street: {friend.address?.street}</p>
            <p>lat: {friend.address?.geo.lat} lang: {friend.address?.geo.lng}</p>

        </div>
    );
};

export default FriendDetail;