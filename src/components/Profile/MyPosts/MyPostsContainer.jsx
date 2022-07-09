
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  tempPostActionCreator,
} from "../../../redux/actionCreators";

import { connect } from "react-redux";


const mapStateToProps = (state) =>{
  return({
    posts:state.profilePage.postsObj,
    temp:state.profilePage.tempPost
  })
}

const mapDispatchToProps = (dispatch)=>{
  return(
    {
      addPost:()=>{dispatch(addPostActionCreator());},
      tempPost:(body)=>{dispatch(tempPostActionCreator(body));}
    }
  )
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)



export default MyPostsContainer;

