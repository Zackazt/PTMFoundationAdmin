import React, { useState, useEffect } from 'react';
import { Login } from './Login/Login';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { PostFeed } from './PostFeed/PostFeed';
import { PostForm } from './PostForm/PostForm';

export const App = () => {

  const [user, setUser] = useState();
  const history = useHistory();

  
  const logOut = () => {
    firebase.auth().signOut();
  };

  firebase.auth().onAuthStateChanged(u => {
    setUser(u);
  });

  useEffect(() => {
    if(user) {
      history.push('/home');
    } else {
      history.push('/login');
    }
  }, [user, history]);

  return (
    <div>
      <button onClick={logOut}>Log Out</button>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/home'>
          <PostFeed />
        </Route>
        <Route path='/new'>
          <PostForm isEdit={false} />
        </Route>
        <Route path='/edit'>
          <PostForm isEdit={true} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
