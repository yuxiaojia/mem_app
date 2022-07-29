import express from 'express';

import { getPosts,createPosts } from '../controllers/posts.js'; //in node we have to add .js

const router = express.Router();

//http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPosts);

export default router;