import Axios from "axios";
//import e from "express";
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

 
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  //check format of credentials object if this doesn't work
  const [credentials, setCredentials] = useState({
    credentials: {username: 'Lambda School', password: 'i<3Lambd4'}
  })
  const history = useHistory()

  //functions
  const login = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('api/login', credentials.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        console.log(res)
        history.push('/protected')
      })
      .catch(err => {
        console.log(err.response.data.error)
      })
  }

  const handleChanges =(e) => {
    e.preventDefault()
    setCredentials({
      credentials: 
        {...credentials.credentials,
          [e.target.name]: e.target.value}
    })
  }

  return (
    <><div>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Login</h2>
      <form>
        <h3>Username:</h3> <input 
        type = 'text'
        name = 'username'
        value = {credentials.credentials.username}
        onChange = {handleChanges}
        />
        <h3>Password:</h3> <input
        type = 'text'
        name = 'username'
        value = {credentials.credentials.password}
        onChange = {handleChanges}
        />
        <button onClick = {login}>Login</button>
        
      </form>
      </div>
    </>
  );
};

export default Login;
