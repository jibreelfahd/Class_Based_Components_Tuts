import React, { Component, useEffect, useState } from "react";

import Users from "./Users";
import UserContext from "../../store/user-context";
import styles from "./UserFinder.module.css";

// @desc: class based components
class UserFinder extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchUser: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchUser !== this.state.searchUser) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchUser)
        ),
      });
    }
  }

  filterUserHandler(event) {
    this.setState({ searchUser: event.target.value });
  }

  render() {
    return (
      <>
        <div className={styles.input}>
          <input type="search" onChange={this.filterUserHandler.bind(this)} />
        </div>
        <Users user={this.state.filteredUsers} />
      </>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DATA_USERS);
//   const [searchUser, setSearchUser] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DATA_USERS.filter((user) => user.name.includes(searchUser))
//     );
//   }, [searchUser]);

//   const filterUserHandler = (event) => {
//     setSearchUser(event.target.value);
//   };

//   return (
//     <>
//       <div className={styles.input}>
//         <input type="search" onChange={filterUserHandler} />
//       </div>
//       <Users user={filteredUsers} />
//     </>
//   );
// };

export default UserFinder;
