const List = () => {
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pine Apple"];

  return (
    <div>
      <ul className="pl-6 list-decimal text-xl">
        {fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
