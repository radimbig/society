import React from "react";
import Image from "react-bootstrap/esm/Image";
import loader from "../../../assets/preloader/loading.gif"

let Loader = () =>{
    return(
      <Image alt="loading..." src={loader} />
    )
  }
  
  


export default Loader