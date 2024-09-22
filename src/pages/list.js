import React, { useLayoutEffect } from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.fname}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { email: "jesy@gma.com", fname: "jesy" },
    { email: "luca@gma.com", fname: "luca" },
    { email: "rolf@gma.com", fname: "rolf" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
