import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { validateSignup } from '../../API.js';

function SignUp(props) {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      validateSignup(data);
      // Check if user is in DB
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="SignUp">
      <header id="SignUp__header">
        <h2>Log in to Twitter-Clone</h2>
      </header>
      <div id="SignUp__form__wrapper">
        <form id="SignUp__form" onSubmit={handleSubmit(onSubmit)}>
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
          <label className="form__input__label" htmlFor="fullname">
            Full Name
          </label>
          <br />
          <input
            className="form__input"
            name="fullname"
            type="text"
            placeholder="Full Name"
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

export default SignUp;
