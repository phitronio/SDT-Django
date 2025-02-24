import { CircleX } from "lucide-react";

const Alert = ({ color = "info", children, onClose }) => {
  const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-500",
    error: "bg-red-100 text-red-700 border-red-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    info: "bg-blue-100 text-blue-700 border-blue-500",
  };

  return (
    <div
      className={`flex items-center justify-between rounded-sm p-4 ${alertStyles[color]}`}
    >
      <span>{children}</span>
      <button onClick={() => onClose()}>
        <CircleX className="text-blue-700 hover:text-blue-500" />
      </button>
    </div>
  );
};

export default Alert;
