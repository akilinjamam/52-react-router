import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend

    const navigate = useNavigate();



    const showFriendsDetails = () => {
        const path = `/friend/${id} `;

        navigate(path)
    }

    return (
        <div>
            <h3>{name}</h3>
            <Link to={'/friend/' + id}>Show Details</Link>
            <button onClick={showFriendsDetails} >  <p>{username} (id name: {id})</p></button>

        </div>
    );
};

export default Friend;