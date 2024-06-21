import React from "react";

import styles from "./User.module.css";

const User = ({ name }) => {
  return <li className={styles.list}>{name}</li>;
};

export default User;
