import { useEffect } from "react";

let count = 0;

const Effect = () => {
  useEffect(() => {
    console.log("Effect occured");
  });

  return (
    <div>
      <h1>UserList {++count}</h1>
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
