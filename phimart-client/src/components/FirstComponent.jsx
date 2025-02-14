// firstComment
// PascalCasing
const FirstComponent = () => {
  const name = "Phitron";

  const sum = (a, b) => a + b;

  return (
    <>
      <h1>Hello {name || "World"}</h1>
      <p>Ki khobor</p>
      <p>Your mark is {sum(5, 34)}</p>
    </>
  );
};

export default FirstComponent;
