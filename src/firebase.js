import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAPr55APpnid8bxmYeBT32Slz_HOnTBsQs",
  authDomain: "ptmfoundation-8c7fd.firebaseapp.com",
  databaseURL: "https://ptmfoundation-8c7fd.firebaseio.com",
  projectId: "ptmfoundation-8c7fd",
  storageBucket: "ptmfoundation-8c7fd.appspot.com",
  messagingSenderId: "864000579543",
  appId: "1:864000579543:web:5944d2c9615ad9f20a9d92"
});

const fDB = firebase.firestore();
const fAuth = firebase.auth();

export const getAllPosts = () => {
  return fDB.collection('posts').orderBy('date', 'desc').get();
};

export const getPost = (id) => {
  return fDB.collection('posts').doc(id).get();
};

// export const createPost = (post) => {
//   const {
//     title,
//     img,
//     video,
//     body
//   } = post;

//   return fDB
//     .collection('post')
//     .add({

//     });
// };

export const updatePost = (id, post) => {
  const {
    title,
    img,
    video,
    body,
    date
  } = post;

  return fDB
    .collection('posts')
    .doc(id)
    .update({
      title,
      img,
      video,
      body,
      date
    });
};

export const userIsLoggedIn = () => {
  return fAuth.currentUser ? true : false;
};
export const login = (e, p) => {
  return fAuth.signInWithEmailAndPassword(e, p);
};

export const user = () => fAuth.currentUser;
