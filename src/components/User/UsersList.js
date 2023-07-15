import React from "react";
import "./UserList.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card>
      <div className="users">
        <ul>
          {props.users.map((element) => {
            return (
              <li key={new Date().getTime()}>
                {element.username} (is {element.age} years old) & {element.collegeName} is his college
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
