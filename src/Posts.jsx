import React, { useState, useEffect } from 'react';
import './Posts.css'
import Comments from './Comments'


function Posts (props) {
  const [comment, setComment] = useState({
    name: 'Edgar Cetino',
    title: 'Software Engineer',
    timeAgo: '2 minutes ago',
    commentText: '',
  })
  const [comments, addComments] = useState([]);
  const [showAddComment, toggleAddComment] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, toggleLiked] = useState(false);

  useEffect(() => {
  }, [liked, comments, comment]);

  const likeClicked = () => {
    if (liked) {
      setLikes(likes - 1);
      toggleLiked(false);
    } else {
      setLikes(likes + 1);
      toggleLiked(true);
    }
  }

  const submitComment = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      addComments([comment, ...comments]);
      setComment({...comment, commentText: ''});
    }
  }


  return (
    <div className='Posts-wrapper'>
      <div className='Posts-header'>
        <img className='Posts-profile-img' src={props.postInfo.profilePicture} alt='profile_pic'/>
        <div className='Posts-header-info'>
          <div className='Posts-header-name'>{props.postInfo.name}</div>
          <div className='Posts-header-location'>
            <img className='Posts-header-location-icon' src='./location_icon.png' alt='location_icon' />
            <div>{props.postInfo.location}</div>
          </div>
          <div className='Posts-header-time'>{props.postInfo.timeAgo}</div>
        </div>
        <button className='Posts-meatballs-button'>
          <img className='Posts-meatballs-img' src='./meatballs_icon.png' alt='meatballs_icon'/>
        </button>
      </div>
      <div className='Posts-text-wrapper'>
        {props.postInfo.postText}
      </div>
      <div className='Posts-likes-comments'>
        {likes} Likes
        <div className='Posts-likes-comments-dot'>{'\u00B7'}</div>
        {comments.length} Comments
      </div>
      <div className='Posts-footer'>
        <div>
          <button className='Posts-footer-buttons' onClick={likeClicked}>
            <img className='Posts-footer-icons' src='./heart_icon.png' alt='heart_icon'/>Like
          </button>
          <button className='Posts-footer-buttons' onClick={() => toggleAddComment(!showAddComment)}>
            <img className='Posts-footer-icons' src='./comment_icon.png' alt='comment_icon'/>Comment
          </button>
        </div>
        {showAddComment && <div className='Comments-add-comment'>
           <img className='Comments-add-comment-profile-img' src={props.postInfo.profilePicture} alt='profile_pic'/>
           <input className='Comments-add-comment-input' value={comment.commentText} onChange={event => setComment({...comment, commentText: event.target.value})} onKeyPress={submitComment} placeholder='Add a comment'></input>
         </div>}
        {showAddComment && comments.map((comment) =>
          <Comments key={comment.commentText} commentInfo={comment}></Comments>
        )}
      </div>
    </div>
  );
}

export default Posts;