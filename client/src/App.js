import React,{ useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memory from'./images/memories.png';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [currentId, dispatch]);

    return (
        <Container maxidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography  variant = "h3" align = "center"  > Memories</Typography>
                <img className = {classes.image} src = {memory} alt = "memory"  height = "60" width = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7} >
                            <Posts setCurrentId = {setCurrentId} />

                        </Grid>
                        <Grid item xs = {12} sm = {4} >
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;