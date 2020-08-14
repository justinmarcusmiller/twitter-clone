import React from "react";
import "./TweetForm.css";
import { useForm } from "react-hook-form";
import casual from "casual-browserify"
import { createTweet } from '../../API.js'

function TweetForm() {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    try {
      data.authorUserName = casual.word + casual.word + casual.integer(100, 999);
      data.authorFullName = casual.full_name;
      const created = createTweet(data);
      console.log(data.content);
      console.log(created);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="TweetForm">
      <div id="TweetForm__userAvatar">
        <svg
          width="75px"
          height="75px"
          viewBox="0 0 16 16"
          className="bi bi-person-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} id="TweetForm__form">
        <input className="TweetForm__form__input" name="content" type="text" placeholder="What's happening?" required ref={register}></input>
        <button className="TweetForm__form__btn">Tweet</button>
      </form>
    </div>
  );
}

export default TweetForm;
