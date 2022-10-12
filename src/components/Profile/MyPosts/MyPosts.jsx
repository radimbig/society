import React from "react";

import Post from "./Post/Post";
import MessForm from "./PostForm";

function MyPosts(props) {
  function addPost(e) {
    props.addPost(e);
  }
  let posts = props.posts.map((post) => {
    return <Post key={post.id} likes={post.likes} text={post.text} />;
  });

  return (
    <div>
      <MessForm temp={props.temp} tempPost={props.tempPost} addPost={addPost} />
      {posts}
    </div>
  );
}
export default MyPosts;
