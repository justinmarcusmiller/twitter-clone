import React, { useEffect } from 'react';
import './LogIn.css';
import { useForm } from "react-hook-form";

function LogIn(props) {
  const {register, handleSubmit} = useForm();

  useEffect(() => {
    document.title = "Log In"
  },[])

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Check if user is in DB
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="LogIn">
      <header id="header-login">
        <h2>Log In</h2>
      </header>
      <div id="login-form-wrapper">
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="username" type="text" placeholder="Username" required ref={register}></input>
          <input name="password" type="password" placeholder="Password" required ref={register}></input>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;