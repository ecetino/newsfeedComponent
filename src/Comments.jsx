import React, { useState, useEffect } from 'react';
import './Comments.css'

function Comments (props) {
  const [likes, setLikes] = useState(0);
  const [liked, toggleLiked] = useState(false);

  const likeClicked = () => {
    if (liked) {
      setLikes(likes - 1);
      toggleLiked(false);
    } else {
      setLikes(likes + 1);
      toggleLiked(true);
    }
  }

  useEffect(() => {
  }, [liked, likes]);

  return (
    <div className='Comments-wrapper'>
      <div className='Comment'>
        <img className='Comment-profile-img' src='./profile_pic.jpeg' alt='profile_pic'/>
        <div className='Comment-post'>
          <div className='Comment-post-header'>
            <div className='Comment-post-header-name'>{props.commentInfo.name}</div>
            <div>{props.commentInfo.timeAgo}</div>
          </div>
          <div className='Comment-post-title'>{props.commentInfo.title}</div>
          <div className='Comment-post-text'>{props.commentInfo.commentText}</div>
          <div className='Comment-post-footer'>
            <button className='Comment-post-footer-button'>
             {likes} Likes
            </button> |
            <button className='Comment-post-footer-button' onClick={likeClicked}>
              <img className='Comment-post-footer-button-icons' src='./heart_icon.png' alt='heart_icon'/>
              Like
            </button> |
            <button className='Comment-post-footer-button'>
              <img className='Comment-post-footer-button-icons' src='./edit_icon.png' alt='edit_icon'/>
              Edit
            </button> |
            <button className='Comment-post-footer-button'>
              <img className='Comment-post-footer-button-icons' src='./delete_icon.png' alt='delete_icon'/>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;