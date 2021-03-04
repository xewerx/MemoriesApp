import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    
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