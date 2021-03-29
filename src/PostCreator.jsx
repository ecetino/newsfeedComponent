import React, { useState, useEffect } from 'react';
import './PostCreator.css'

function PostCreator (props) {
  const [postInfo, setPostInfo] = useState({
    name: 'Edgar Cetino',
    location: 'WA, USA',
    title: 'Software Engineer',
    profilePicture: './profile_pic.jpeg',
    timeAgo: '2 minutes ago',
    postText: '',
  });

  useEffect(() => {
  }, [postInfo.postText]);

  const submitPost = () => {
    setPostInfo({...postInfo, postText: ''});
    props.addPosts([postInfo, ...props.posts ]);
  }

  return (
    <div className='PostCreator-wrapper'>
      <div className='PostCreator-upper'>
        <img className='PostCreator-profile-img' src={postInfo.profilePicture} alt='profile_pic'/>
        <textarea className='PostCreator-textarea' value={postInfo.postText} onChange={event => setPostInfo({...postInfo, postText: event.target.value})} placeholder='What is on your mind?'>
        </textarea>
      </div>
      <div className='PostCreator-lower'>
        <button className='PostCreator-photo-video-button'><img className='PostCreator-photo-video-img' src='./photo_video_icon.png' alt='photo_video_icon'/>Photo/Video</button>
        <button className='PostCreator-post-it-button' onClick={submitPost}>Post It</button>
      </div>
    </div>
  );
}

export default PostCreator;