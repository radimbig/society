import React from "react";
import { addPostActionCreator, tempPostActionCreator } from "../../../redux/state";
import Post from "./Post/Post";


let textArea = React.createRef();


function MyPosts(props) {
  
  function TempPost(){
    let text = textArea.current.value;
    
    props.dispatch(tempPostActionCreator(text));
  }


  function addPost() {

    
    props.dispatch(addPostActionCreator());
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
