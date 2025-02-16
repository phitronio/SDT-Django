import { useState } from "react";

const List = () => {
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pine Apple"];

  const [selctedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState("");

  // // let selctedIndex = -1;
  // const handleItemPrint = (index) => {

  //   console.log(selctedIndex);
  // };

  return (
    <div>
      <ul className="pl-6 list-decimal text-xl">
        {fruits.map((fruit, index) => {
          return (
            <li
              className={
                selctedIndex === index ? "bg-blue-500 p-3 rounded-sm m-3" : ""
              }
              onClick={() => setSelectedIndex(index)}
              key={fruit}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
