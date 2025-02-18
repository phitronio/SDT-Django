import { useEffect, useState } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [dependancyA, setDependancyA] = useState(0);
  const [dependancyB, setDependancyB] = useState(0);

  useEffect(() => {
    console.log("Effect occured");
    setUsers(["John"]);
  }, [dependancyA, dependancyB]);

  return (
    <div>
      <h1>UserList </h1>
      <button
        onClick={() => setDependancyA(Math.random())}
        className="px-3 py-2 bg-blue-500 me-2"
      >
        Click me A
      </button>
      <button
        onClick={() => setDependancyB(Math.random())}
        className="px-3 py-2 bg-blue-500"
      >
        Click me B
      </button>
    </div>
  );
};

export default Effect;

/* 
Side Effects
1. Manually modify the DOM
2. Store data in local storage 
3. Call the to fetch/save data
*/
