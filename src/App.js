import React, { useState, useEffect } from 'react';
import './App.css';
import PostCreator from './PostCreator.jsx';
import Posts from './Posts.jsx';


function App () {
  const [userInfo, setUserInfo] = useState({
    name: 'Edgar Cetino',
    location: 'WA, USA',
    title: 'Software Engineer',
    profilePicture: './profile_pic.jpeg'
  });

  const [posts, addPosts] = useState([]);

  useEffect(() => {
  }, [posts]);

  return (
    <div className="App-wrapper">
      <PostCreator addPosts={addPosts} posts={posts} setUserInfo={setUserInfo} userInfo={userInfo}></PostCreator>
      {posts.map((post) =>
        <Posts key={post.postText} postInfo={post}></Posts>
      )}
    </div>
  );
}

export default App;
