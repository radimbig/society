import React from "react";
import Post from "./Post/Post";

let postsObj = [
  { likes: 133, text: "ja churka" },
  { likes: 45, text: "lysa boshka" },
  { likes: 89, text: "kruchu binance" },
];
let textArea = React.createRef();


function MyPosts(props) {
  function TempPost(){
    let text = textArea.current.value;
    props.TempPost(text);
  }


  function addPost() {
    let text = textArea.current.value;
    props.addPost(text);
  }
  let bebra = props.data.map((L) => {
    return <Post likes={L.likes} text={L.text} />;
  });

  return (
    <div>
      <textarea onChange={TempPost} value={props.temp} ref={textArea}></textarea>
      <div>
        <button onClick={addPost}>Add post {props.data[2].color} </button>
      </div>
      {bebra}
    </div>
  );
}
export default MyPosts;
