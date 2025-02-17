import { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({
    firstName: "afd",
    lastName: "fdfd",
    email: "mail@example.com",
    address: {
      city: "Mirpur",
      state: "Dhaka",
    },
  });

  const handleClick = () => {
    const newPerson = {
      ...person,
      address: {
        ...person.address,
        city: "Dhanmondi",
      },
    };

    setPerson(newPerson);
  };

  return (
    <div className="m-5">
      <h1>
        {person.firstName} {person.lastName} {person.email}
      </h1>
      <p>
        {person.address.city}, {person.address.state}
      </p>
      <button
        onClick={handleClick}
        className="px-3 py-2 bg-blue-500 text-white rounded-sm"
      >
        Click Me
      </button>
    </div>
  );
};

export default Person;

// state works asynchronously
