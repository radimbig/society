import React from "react";
import classes from "./Post.module.css"
const Post = (props)=>{
    return(
        <div className={classes.item}>
        <img  alt="s" src="https://leakedmodels.com/wp-content/uploads/2020/11/Eva_Elfie_nude_leaks_leakedmodels.com_044.jpg"></img>
        {props.text}
        <br></br>
        <button>like</button>
        <button>Dislike</button> {props.likes}

        </div>
    )
}
export default Post;