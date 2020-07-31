import React from 'react';
import './TweetCard.css';

function TweetCard(props) {
  return (
    <div className="TweetCard">
      <header class="TweetCard__header">
        <h3>{props.fullName}</h3>
        <h4>{props.userName}</h4>
      </header>
      <p>{props.content}</p>
    </div>
  );
}

export default TweetCard;