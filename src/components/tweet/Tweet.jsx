
import React from "react";
import './Tweet.css'

function Tweet(props) {

  const { image, name, handle, timestamp, message } = props;
  return (
    <div className="tweet">
      <div className="top">
        <img src={image} className="profile" alt="profile"/>
        <div className="content">
          <div className="user-data"> 
            <span className="name">{name}</span>
            <span className="secondary-data">@{handle} · {timestamp}</span>
          </div>
          <div className="message">
            <p>{message}</p>
            <div>
              <i className="far fa-comment button" data-testid="comment-icon"></i>
              <i className="fas fa-retweet button" data-testid="retweet-icon"></i>
              <i className="far fa-heart button" data-testid="heart-icon"></i>
              <i className="fas fa-share button" data-testid="share-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
