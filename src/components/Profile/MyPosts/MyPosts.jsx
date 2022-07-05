import React from "react";
import Post from "./Post/Post";


let textArea = React.createRef();


function MyPosts(props) {
  
  function TempPost(){
    let tempObj = {
      type:"TEMP-POST",
      text:textArea.current.value
    }
    let text = textArea.current.value;
    props.dispatch(tempObj);
  }


  function addPost() {
    let tempObj={
      type:"ADD-POST"
    }
    
    props.dispatch(tempObj);
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
