import React, { Component } from "react";
import { User } from "./User";

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Bill" },
        { id: 2, name: "Tom" },
        { id: 3, name: "Pete" },
        { id: 4, name: "Ashley" },
        { id: 5, name: "Greg" }
      ],
      name: ""
    };
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(e) {
    let { users } = this.state;
    let newUsers = users.map(user => {
      user.checked = user.id === e;
      return user;
    });

    this.setState({
      users: newUsers
    });
  }
  render() {
    let { users } = this.state;
    return users.map(user => (
      <User
        name={user.name}
        key={user.id}
        id={user.id}
        changeUser={this.changeUser}
        checked={user.checked || ""}
      />
    ));
  }
}
