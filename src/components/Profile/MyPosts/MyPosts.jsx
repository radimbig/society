import React from "react";
import Post from "./Post/Post";

let postsObj = [
  {likes:133, text:"ja churka"},
  {likes:45, text:"lysa boshka"},
  {likes:89, text:"kruchu binance"}
]

let postsString = postsObj.map((postsObj) => {return(<Post likes={postsObj.likes} text={postsObj.text} />)}) 
const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <div>
        <button>Add post</button>
      </div>

      {/* <Post likes="1" text="123" />
      <Post  likes="45" text="888" />
      <Post likes="89" text="890" /> */}
      {postsString}
    </div>
  );
};
export default MyPosts;
