import React, { useState } from 'react';
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from '../../css-modules/LoginPage.module.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  if(sessionUser) return (
    <Redirect to='/' />
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if(data && data.errors.length > 0) setErrors(data.errors)
      })
  }
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.loginInForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Log in:</h1>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
