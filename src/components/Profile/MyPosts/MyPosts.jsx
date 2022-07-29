import React from "react";

import Post from "./Post/Post";
import MessForm from "./PostForm";





function MyPosts(props) {
  



  function addPost(e) {
    props.addPost(e);
  }
  let bebra = props.posts.map((L) => {
    return <Post key={L.id} likes={L.likes} text={L.text} />;
  });
  
  return (
    <div>
      <MessForm temp={props.temp} tempPost={props.tempPost} addPost={addPost} />
      {bebra}
    </div>
  );
}
export default MyPosts;
