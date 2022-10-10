import React from "react";
import styles from "./Profile.module.css";
import { Avatar } from "antd";
import facebook from "../../assets/socials/facebook.png";
import github from "../../assets/socials/github.png";
import instagram from "../../assets/socials/instagram.png";

let size = {
  xs: 50,
  sm: 50,
  md: 75,
  lg: 75,
  xl: 75,
  xxl: 75,
};
/**
size={{
                                 xs: 200,
                                 sm: 200,
                                 md: 220,
                                 lg: 250,
                                 xl: 250,
                                 xxl: 350
                            }}
 */

const SocialLinks = (props) => {
  let links = [];

  if (
    props.user.contacts.instagram !== null &&
    props.user.contacts.instagram !== "" &&
    props.user.contacts.instagram !== "https://instagram.com/"
  ) {
    links.push(
      <a
        rel="noreferrer"
        key={1}
        target="_blank"
        href={props.user.contacts.instagram}
      >
        <Avatar
          size={size}
          className={styles.social}
          alt="Logo of instagram"
          src={instagram}
        />
      </a>
    );
  }
  if (
    props.user.contacts.github !== null &&
    props.user.contacts.github !== "" &&
    props.user.contacts.github !== "https://github.com/"
  ) {
    links.push(
      <a
        rel="noreferrer"
        key={2}
        target="_blank"
        href={props.user.contacts.github}
      >
        <Avatar
          size={size}
          className={styles.social}
          alt="Logo of instagram"
          src={github}
        />
      </a>
    );
  }
  if (
    props.user.contacts.facebook !== null &&
    props.user.contacts.facebook !== "" &&
    props.user.contacts.facebook !== "https://facebook.com/"
  ) {
    links.push(
      <a
        rel="noreferrer"
        key={3}
        target="_blank"
        href={props.user.contacts.facebook}
      >
        <Avatar
          size={size}
          className={styles.social}
          alt="Logo of instagram"
          src={facebook}
        />
      </a>
    );
  }

  return links;
};

export default SocialLinks;
