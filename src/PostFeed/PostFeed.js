import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';

export const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isCancelled = false;
    firebase
      .firestore()
      .collection('posts')
      .orderBy('date', 'desc')
      .get()
      .then((snap) => {
        if (!isCancelled) {
          const _posts = [];
          snap.forEach((doc) => {
            const data = doc.data();
            _posts.push({
              ...data,
              id: doc.id,
            });
          });
          setPosts(_posts);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  const deletePost = (post) => {
    if (window.confirm(`Are you sure you want to delete: ${post.title}?`)) {
      firebase
        .firestore()
        .collection('posts')
        .doc(post.id)
        .delete()
        .then(() => history.go());
    }
  };

  const newPost = () => history.push('/new');
  const editPost = (post) => history.push(`/edit?post=${post.id}`);

  return (
    <div className={styles.postContainer}>
      <h1>Posts</h1>
      <button onClick={newPost}>Create New Post</button>
      {posts.length ? (
        posts.map((post, index) => {
          return (
            <div className={styles.post} key={index}>
              <h1>{post.title}</h1>
              <img alt='post' src={post.img} />
              <button onClick={() => editPost(post)}>Edit</button>
              <button onClick={() => deletePost(post)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <>No posts yet</>
      )}
    </div>
  );
};
