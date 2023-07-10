import express from 'express';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts);


//router object is being exported as the 
//default value from the module where this 
//statement appears.

export default router;