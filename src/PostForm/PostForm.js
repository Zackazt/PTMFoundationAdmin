import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import styles from './styles.module.css';

export const PostForm = ({ isEdit }) => {
  const [post, setPost] = useState({
    body: '',
    title: '',
    img: '',
    date: 0
  });

  const history = useHistory();
  const location = useLocation();

  const [imgError, setImageErr] = useState('');

  useEffect(() => {
    const postId = location.search?.split('post=')?.[1];
    if (isEdit && postId) {
      firebase
        .firestore()
        .collection('posts')
        .doc(postId)
        .get()
        .then((snap) => {
          const data = snap.data();
          if (data) {
            setPost(data);
          }
        });
    }
  }, [location.search, isEdit]);

  const isImgUrl = (url) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  };

  const getDateFromMS = (ms) => {
    return new Date(ms).toISOString().slice(0, 10);
  };
  const getMSFromDate = (date) => {
    return new Date(date).valueOf();
  };

  const updatePost = () => {
    const postId = location.search?.split('post=')?.[1];
    if (post.title && post.body && post.img && isImgUrl(post.img)) {
      if (isEdit && postId) {
        firebase.firestore().collection('posts').doc(postId).update({
          title: post.title.trim(),
          body: post.body.trim(),
          img: post.img.trim(),
          date: post.date
        }).then(() => history.push('/PTMFoundationAdmin/home'));
      } else {
        firebase
          .firestore()
          .collection('posts')
          .add({
            title: post.title.trim(),
            body: post.body.trim(),
            img: post.img.trim(),
            date: Date.now(),
          }).then(() => history.push('/PTMFoundationAdmin/home'));
      }
    } else if (post.img && !isImgUrl(post.img)) {
      setImageErr('Please post the direct link to the image. It should end in .png, .jpg, etc');
    }
  };

  return (
    <div className={styles.form}>
      <h1>{isEdit ? 'Edit Post' : 'Create Post'}</h1>

      <label>Date</label>
      <input type='date' value={getDateFromMS(post.date)} onChange={(e) => {
        e.persist();
        setPost({
          ...post,
          date: getMSFromDate(e.target.value)
        })
      }} />

      <label>Title</label>
      <input
        placeholder='Title'
        value={post.title}
        onChange={(e) =>
          setPost({
            ...post,
            title: e.target.value,
          })
        }
      />

      <label>Image URL</label>
      <input
        placeholder='Image URL'
        value={post.img}
        className={imgError ? styles.error : ''}
        onChange={(e) =>
          setPost({
            ...post,
            img: e.target.value,
          })
        }
      />
      <span className={styles.imgErr}>{imgError}</span>

      <label>Post Body</label>
      <textarea
        onChange={(e) =>
          setPost({
            ...post,
            body: e.target.value,
          })
        }
        placeholder='Post'
        defaultValue={post.body}
      />

      <button onClick={updatePost}>{isEdit ? 'Update' : 'Create'}</button>
      <button className={styles.cancelButton} onClick={() => history.push('/PTMFoundationAdmin/home')}>
        Cancel
      </button>
    </div>
  );
};
