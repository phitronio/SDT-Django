import { useState, useEffect } from "react";

const APIFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/wusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul className="list-disc m-5">
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIFetch;

/* 
{
    result: [
        {}
    ]
}
*/
