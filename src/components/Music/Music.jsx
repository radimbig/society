import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



const Music = (props) =>{
    return(
        <div>
            Here is Music!
        </div>
    )
}

export default withAuthRedirect(Music);