import React from "react";
import {Card , CardActions, CardContent, CardMedia,  Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
const Post = ({ post }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>

        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => {}}><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" /> 
            Like 
            {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" /> 
            Delete
            </Button>
        </CardActions>
      </Card>
    );

}

export default Post;       
