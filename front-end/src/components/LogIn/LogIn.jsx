import React, { useEffect } from "react";
import "./LogIn.css";
import { useForm } from "react-hook-form";
import { validateLogin } from "../../API.js";

function LogIn(props) {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Log In";
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      validateLogin(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="LogIn">
      <header id="LogIn__header">
        <h2>Log in to Twitter-Clone</h2>
      </header>
      <div id="LogIn__form__wrapper">
        <form id="LogIn__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="form__input__label" htmlFor="username">
            Username
          </label>
          <br />
          <input
            className="form__input"
            name="username"
            type="text"
            placeholder="Username"
            required
            ref={register}
          ></input>
          <br />
          <label className="form__input__label" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="form__input"
            name="password"
            type="password"
            placeholder="Password"
            required
            ref={register}
          ></input>
          <br />
          <button className="form__btn">Log In</button>
        </form>
        <a href="/">Sign up for Twitter-Clone</a>
      </div>
    </div>
  );
}

export default LogIn;
