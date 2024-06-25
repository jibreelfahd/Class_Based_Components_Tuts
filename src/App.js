import React from "react";

import UserContext from "./store/user-context";
import UserFinder from './components/User/UserFinder';

const DATA_USERS = [
  { id: "g1", name: "Zangetsu" },
  { id: "g2", name: "Kageyoshi" },
  { id: "g3", name: "Senbonzakura" },
];

const App = () => {
  const usersContext = {
    users: DATA_USERS
  }

  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />
    </UserContext.Provider>
  );
};

export default App;
