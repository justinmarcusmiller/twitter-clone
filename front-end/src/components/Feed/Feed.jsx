import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetForm from "../TweetForm/TweetForm.jsx";
import TweetCard from "../TweetCard/TweetCard";
import { listTweets } from "../../API.js";

function Feed(props) {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    (async () => {
      const tweetData = await listTweets();
      setTweets(tweetData);
      console.log(tweetData);
    })();
  }, []);

  return (
    <div id="Feed">
      <header id="Feed__header">
        <h2>Home</h2>
      </header>
      <TweetForm />
      {tweets.length == 0 && <p>Error loading tweets</p>}
      {tweets.length > 0 && tweets.map((tweet) => {
        return (
          <TweetCard
            key={tweet._id}
            userName={tweet.authorUserName}
            fullName={tweet.authorFullName}
            content={tweet.content}
          />
        );
      })}
    </div>
  );
}

export default Feed;
