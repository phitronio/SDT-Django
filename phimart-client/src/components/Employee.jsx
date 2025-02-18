import { useState } from "react";

const Employee = () => {
  const employeeArr = [
    { name: "John", age: 20 },
    { name: "Mr. X", age: 30 },
  ];
  const [employee, setEmployee] = useState(employeeArr);

  const handleClick = () => {
    setEmployee(
      employee.map((emp) => (emp.name === "John" ? { ...emp, age: 60 } : emp))
    );
  };
  return (
    <div>
      <ul className="list-disc m-5">
        {employee.map((emp, index) => (
          <li key={index}>
            Name: {emp.name} age: {emp.age}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className="px-3 py-2 bg-green-500 text-white"
      >
        Click to update age
      </button>
    </div>
  );
};

export default Employee;
