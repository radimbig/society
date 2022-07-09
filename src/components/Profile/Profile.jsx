import React from "react";

import w from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPosts from "./MyPosts/MyPostsContainer";


function Profile(props){
  
  return (
    <div className={w.content}>
        
        <ProfileInfo src="https://img00.deviantart.net/ebde/i/2013/087/f/2/mercedes_benz_icon_by_slamiticon-d5z70do.png" text="description" />
        
      <SuperMyPosts  store={props.store} dispatch={props.dispatch} />
    </div>
  );
};
export default Profile;

