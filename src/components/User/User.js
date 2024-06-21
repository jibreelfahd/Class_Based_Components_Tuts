import React, { Component } from "react";

import styles from "./User.module.css";

class User extends Component {
  render() {
    return <li className={styles.list}>{this.props.name}</li>;
  }
}
// const User = ({ name }) => {
//   return <li className={styles.list}>{name}</li>;
// };

export default User;
