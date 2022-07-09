import React from "react";

import Post from "./Post/Post";


let textArea = React.createRef();


function MyPosts(props) {
  
  function TempPost(){
    let text = textArea.current.value;
    
    props.tempPost(text)
  }


  function addPost() {

    
    props.addPost();
  }
  let bebra = props.posts.map((L) => {
    return <Post key={L.id} likes={L.likes} text={L.text} />;
  });
  
  return (
    <div>
      <textarea onChange={TempPost} value={props.temp} ref={textArea}></textarea>
      <div>
        <button onClick={addPost}>Add post  </button>
      </div>
      {bebra}
    </div>
  );
}
export default MyPosts;
