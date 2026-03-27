import { db } from '../config/db.js';

export const getAllPosts = async () => {
  const [rows] = await db.query('SELECT * FROM posts');
  return rows;
};

export const getPostById = async (id: number) => {
  const [rows]: any = await db.query(
    'SELECT * FROM posts WHERE post_id = ?',
    [id]
  );

  return rows.length ? rows[0] : null;
};

export const createPost = async (title: string, content: string) => {
  const [result] = await db.query(
    'INSERT INTO posts (title, content) VALUES (?, ?)',
    [title, content]
  );

  return result;
};

export const updatePost = async (id: number, status: string) => {
  const [result] = await db.query(
    'UPDATE posts SET status = ? WHERE post_id = ?',
    [status, id]
  );

  return result;
};

export const deletePost = async (id: number) => {
  const [result] = await db.query(
    'DELETE FROM posts WHERE post_id = ?',
    [id]
  );

  return result;
};