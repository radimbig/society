import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import w from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props){
  
  return (
    <div className={w.content}>
        
        <ProfileInfo src="https://img00.deviantart.net/ebde/i/2013/087/f/2/mercedes_benz_icon_by_slamiticon-d5z70do.png" text="description" />
        
      <MyPosts  temp={props.temp} dispatch={props.dispatch} data={props.data}  />
    </div>
  );
};
export default Profile;

