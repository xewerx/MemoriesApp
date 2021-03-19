import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyless from './styles';

const Auth = () => {
    const classes = useStyless();

    const isSignup = false;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <TextField name="firstName" label="FirstName" handleChange/>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
