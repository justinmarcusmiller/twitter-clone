import React from 'react';
import './TweetForm.css';

function TweetForm() {
  return (
    <div id="TweetForm">
      <div id="userAvi"></div>
      <form id="tweet-form">
        <input type="text" placeholder="What's happening?"></input>
        <button>Tweet</button>
      </form>
    </div>
  );
}

export default TweetForm;