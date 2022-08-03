import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessage = await PostMessage.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message});
    }
    //res.send('THIS WORKS!'); delete this for server
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost); //http status code 2xx Success, 4xx client error 
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);
    
    console.log('DELETE!');

    res.json({ message: "Post deleted successfully." });
}

