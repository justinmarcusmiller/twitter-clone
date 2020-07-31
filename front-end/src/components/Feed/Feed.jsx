import React from 'react';
import './Feed.css';
import TweetForm from '../TweetForm/TweetForm.jsx';
import TweetCard from '../TweetCard/TweetCard';

function Feed(props) {
  return (
    <div id="Feed">
      <header id="header-home">
        <h2>Home</h2>
      </header>
      <TweetForm />
      {props.tweets.map((tweet) => {
        return (
          <TweetCard
            key={tweet._id}
            userName={tweet.authorUserName}
            fullName={tweet.authorFullName}
            content={tweet.content}
          />
        )
      })}
    </div>
  );
}

export default Feed;