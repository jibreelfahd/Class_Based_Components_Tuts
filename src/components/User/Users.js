import React, { Component } from "react";

import User from "./User";
import styles from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }

  toggleButton() {
    this.setState((curVal) => {
      return {
        showUsers: !curVal.showUsers,
      };
    });
  }

  render() {
    const userList = this.props.user.map((users) => (
      <User key={users.id} name={users.name} />
    ));

    return (
      <div className={styles["user--list"]}>
        <button onClick={this.toggleButton.bind(this)}>
          {this.state.showUsers ? "Show" : "Hide"} Users
        </button>
        {this.state.showUsers && <ul>{userList}</ul>}
      </div>
    );
  }
}



// const Users = () => {
//   const [showButton, setShowButton] = useState(false);

//   const toggleButton = () => {
//     setShowButton((prevVal) => !prevVal);
//   };

//   const userList = DATA_USERS.map((users) => (
//     <User key={users.id} name={users.name} />
//   ));

//   return (
//     <div className={styles["user--list"]}>
//       <button onClick={toggleButton}>
//         {showButton ? "Show" : "Hide"} Users
//       </button>
//       {showButton && <ul>{userList}</ul>}
//     </div>
//   );
// };

export default Users;
