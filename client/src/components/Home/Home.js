import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {  //useEffect wywoluje sie pierwszy raz przy inicjalizacji apki
        //console.log(dispatch) widac co robi dispatch jak dostanie funkcje na wejscie
        dispatch(getPosts()); // dispatch jesli dostanie funkcje to ja wywoluje przekazujac jako parametry funkcje dispatch i getState
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home