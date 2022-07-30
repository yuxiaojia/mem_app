import React,{ useState } from "react";
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";

import useStyles from './styles';
import { createPost } from "../../actions/posts";

const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '',
        title: '', 
        message: '', 
        tags: '', 
        selectedfiles: '', 
    })
    const dispatch = useDispatch();
    const handleSubmit = (eventParam) => {
        eventParam.preventDefault();
        dispatch(createPost(postData));
    }
    const clear = () => {

    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
            <Typography variant = "h6">Creating a Memory</Typography>
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
                onChange = {(eventParam) => setPostData ({ ...postData, tags: eventParam.target.value})}
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