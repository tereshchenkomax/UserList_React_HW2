import React from "react";
import ReactDOM from "react-dom";
import { UserList } from "./UserList";

import "./styles.css";

function App() {
  return (
    <ul>
      <UserList />
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
