import * as Post from '../models/post.models.js';

export const getPosts = async (c: any) => {
  const posts = await Post.getAllPosts();
  return c.json(posts);
};

export const getPost = async (c: any) => {
  const id = Number(c.req.param('id'));

  const post = await Post.getPostById(id);

  if (!post) {
    return c.json({ message: 'Post not found' }, 404);
  }

  return c.json(post);
};

export const addPost = async (c: any) => {
  const body = await c.req.json();

  if (!body.title || !body.content) {
    return c.json({ message: 'Title and content required' }, 400);
  }

  const result = await Post.createPost(body.title, body.content);

  return c.json({ message: 'Created', result });
};

export const editPost = async (c: any) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();

  const result = await Post.updatePost(id, body.status);

  return c.json({ message: 'Updated', result });
};

export const removePost = async (c: any) => {
  const id = Number(c.req.param('id'));

  const result = await Post.deletePost(id);

  return c.json({ message: 'Deleted', result });
};