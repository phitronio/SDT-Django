const Button = ({
  handleClick,
  children,
  color = "primary",
  className = "",
}) => {
  const BtnColors = {
    primary: "bg-blue-500",
    success: "bg-green-500",
    danger: "bg-red-500",
    info: "bg-cyan-500",
    warning: "bg-yellow-500",
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} m-5 px-3 py-2 bg-blue-500 text-white rounded-sm ${BtnColors[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
