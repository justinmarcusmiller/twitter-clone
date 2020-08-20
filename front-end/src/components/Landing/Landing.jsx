import React, { useEffect, useState } from "react";
import "./Landing.css";
import { useForm } from "react-hook-form";
import { validateLogin } from "../../API.js";

function Landing() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      validateLogin(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="Landing">
      <aside id="Landing__left"></aside>
      <main id="Landing__main">
        <form
          className="Landing__main__topLogin"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="userCredintials__label" htmlFor="username">
            Username
          </label>
          <input
            className="userCredintials__input"
            type="text"
            name="username"
            required
            ref={register}
          ></input>
          <label className="userCredintials__label" htmlFor="Password">
            Password
          </label>
          <input
            className="userCredintials__input"
            type="password"
            name="password"
            required
            ref={register}
          ></input>
          <button className="userCredintials__btn btn--secondary">
            Log in
          </button>
        </form>
        <div className="Landing__mainContent">
          <div className="Landing__mainContent__logo">
            <svg
              viewBox="0 0 16 16"
              class="bi bi-newspaper"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 2A1.5 1.5 0 0 1 1.5.5h11A1.5 1.5 0 0 1 14 2v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 14V2zm1.5-.5A.5.5 0 0 0 1 2v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5h-11z"
              />
              <path
                fill-rule="evenodd"
                d="M15.5 3a.5.5 0 0 1 .5.5V14a1.5 1.5 0 0 1-1.5 1.5h-3v-1h3a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 1 .5-.5z"
              />
              <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
            </svg>
          </div>
          <div className="Landing__mainContent__cta">
            <h2>See what's happening in the world right now</h2>
          </div>
          <div className="Landing__mainContent__joinCta">
            <h3>Join Twitter-Clone today.</h3>
          </div>
          <nav className="Landing__mainContent__links">
            <button className="Landing__mainContent__links__btn btn--primary">
              Sign Up
            </button>
            <button className="Landing__mainContent__links__btn btn--secondary">
              Log In
            </button>
          </nav>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Landing;
