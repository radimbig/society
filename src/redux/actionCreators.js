const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"


export const tempPostActionCreator = (b) => {
    return {
      type: TEMP_POST,
      text: b,
    };
  };
  
  export const addPostActionCreator = () =>{
    return({
      type:ADD_POST
    })}
  
  
  export const tempMessActionCreator = (value) =>{
  return(
    {
      type:TEMP_MESS,
      text:value
    }
  )
  }
  
  export const sendMessActionCreator = () =>{
    return(
      {
        type:SEND_MESS
      }
    )
  }
  
  