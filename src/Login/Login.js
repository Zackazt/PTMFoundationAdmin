import React, { useState } from 'react';
import { login as fLogin } from '../firebase';
import styles from './styles.module.css';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const login = () => {
    if(email && password) {
      fLogin(email.trim(), password.trim())
      .catch(error => {
        if(error.code === 'auth/invalid-email') {
          setError('Invalid credentials');
        } else {
          console.log(error.code === 'auth/wrong-password');
          setError('Incorrect password');
        }
      });
    }
  };

  return (
    <div style={{ width: '300px', maxWidth: '100%', margin: 'auto', marginTop: '100px' }}>
    <h1 style={{ textAlign: 'center' }}>Login</h1>
    <input 
        className={styles.loginInput}
        type='email' 
        placeholder='email' 
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            login();
          }
        }}
        onChange={(e) => setEmail(e.target.value)} />
      <input 
       className={styles.loginInput}
        style={{ width: '300px', maxWidth: '100%', marginBottom: '25px' }}
        type='password' 
        placeholder='password' 
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            login();
          }
        }}
        onChange={(e) => setPassword(e.target.value)} />
        {
          error &&
          <div className={styles.error}>
            {error}
          </div>
        }

      <button disabled={!email || !password} className={styles.loginButton} onClick={login}>Login</button>
    </div>
  );
};
