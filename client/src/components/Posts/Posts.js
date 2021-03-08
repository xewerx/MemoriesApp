import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    
    console.log(posts);
    return (
        <>
        <h1>Post</h1>
        <Post/>
        <Post/>
        <Post/>
        </>
    );
}

export default Posts;