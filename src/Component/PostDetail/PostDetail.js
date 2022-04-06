import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

    const { postId } = useParams()
    const [post, setPost] = useState({})
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h2>detail info: {postId} </h2>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>

        </div>
    );
};

export default PostDetail;