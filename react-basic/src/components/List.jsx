import { useState } from "react";

// eslint-disable-next-line react/prop-types
const List = ({ items = [], heading }) => {
  const [selctedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1 className="text-xl font-bold">{heading}</h1>
      <ul className="pl-6 list-decimal text-xl">
        {items.map((fruit, index) => {
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
