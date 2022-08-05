import React,{ useState, useEffect } from "react";
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from "react-file-base64"
import { useDispatch,useSelector } from "react-redux";

import useStyles from './styles';
import { createPost, updatePost } from "../../actions/posts";

const Form = ( {currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const [postData, setPostData] = useState({
        creator: '',
        title: '', 
        message: '', 
        tags: '', 
        selectedfiles: '', 
    })
    
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (eventParam) => {

        eventParam.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
           
        } else {
            dispatch(createPost(postData));
            
        }
  
        clear();      

    };
    
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
            <Typography variant = "h6">{currentId ? 'Editing ' : 'Creating ' }a Memory</Typography>
            <TextField name = "creator" 
                variant = "outlined"
                label = "Creator" 
                fullWidth
                value = {postData.creator}
                onChange = {(eventParam) => setPostData ({ ...postData, creator: eventParam.target.value})}
            />
            <TextField name = "title" 
                variant = "outlined"
                label = "Title" 
                fullWidth
                value = {postData.title}
                onChange = {(eventParam) => setPostData ({ ...postData, title: eventParam.target.value})}
            />
            <TextField name = "message" 
                variant = "outlined"
                label = "Message" 
                fullWidth
                value = {postData.message}
                onChange = {(eventParam) => setPostData ({ ...postData, message: eventParam.target.value})}
            />
            <TextField name = "tags" 
                variant = "outlined"
                label = "Tags" 
                fullWidth
                value = {postData.tags}
                onChange = {(eventParam) => setPostData ({ ...postData, tags: eventParam.target.value.split(',')})}
            />
            <div className={classes.fileInput}>
                <FileBase   
                type = "file"
                mutiple = {false}
                onDone = {({base64}) => setPostData ({ ...postData, selectedFile: base64})}
                />
            </div>
            <Button 
                className={classes.buttonSubmit}
                variant = "contained" 
                color = "primary" 
                size = "large" 
                type = "submit" 
                fullWidth>
                    Submit
            </Button>
            <Button 
                variant = "contained" 
                color = "secondary" 
                size = "small" 
                onClick = {clear}
                fullWidth>
                    Clear
            </Button>

            </form>
        </Paper>
    );

}

export default Form;        