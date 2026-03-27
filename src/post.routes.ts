import { Hono } from 'hono';
import {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
} from '../controllers/post.controllers.js';

const postRoutes = new Hono();

postRoutes.get('/posts', getPosts);
postRoutes.get('/posts/:id', getPost);
postRoutes.post('/posts', addPost);
postRoutes.put('/posts/:id', editPost);
postRoutes.delete('/posts/:id', removePost);

export default postRoutes;