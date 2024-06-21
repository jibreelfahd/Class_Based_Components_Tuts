import React, { useState } from "react";

import User from "./User";
import styles from "./Users.module.css";

const Users = () => {
  const [showButton, setShowButton] = useState(false);
  const DATA_USERS = [
    {
      id: "g1",
      name: "Zangetsu",
    },
    {
      id: "g2",
      name: "Kageyoshi",
    },
    {
      id: "g3",
      name: "Senbonzakura",
    },
  ];

  const toggleButton = () => {
    setShowButton((prevVal) => !prevVal);
  };

  const userList = DATA_USERS.map((users) => (
    <User key={users.id} name={users.name} />
  ));

  return (
    <div className={styles["user--list"]}>
      <button onClick={toggleButton}>{showButton ? 'Show' : 'Hide'} Users</button>
      {showButton && <ul>{userList}</ul>}
    </div>
  );
};

export default Users;
