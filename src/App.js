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
      history.push('/PTMFoundationAdmin/home');
    } else {
      history.push('/PTMFoundationAdmin/login');
    }
  }, [user, history]);

  return (
    <div>
      <button onClick={logOut}>Log Out</button>
      <Switch>
        <Route path='/PTMFoundationAdmin/login'>
          <Login />
        </Route>
        <Route path='/PTMFoundationAdmin/home'>
          <PostFeed />
        </Route>
        <Route path='/PTMFoundationAdmin/new'>
          <PostForm isEdit={false} />
        </Route>
        <Route path='/PTMFoundationAdmin/edit'>
          <PostForm isEdit={true} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
