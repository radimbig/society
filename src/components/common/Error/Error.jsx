import React from "react";
import ErrorImg from "../../../assets/error/error.png";
import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles.root}>
      <img alt="ERROR" src={ErrorImg} />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Error;
