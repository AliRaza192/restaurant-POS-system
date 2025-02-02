import { useNavigate } from "react-router-dom";


const TableCard = ({ key, name, status, initial }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "Booked") return;
    navigate(`/menu`);
  };

  return (
    <div
      onClick={handleClick}
      key={key}
      className="bg-[#262626] w-[300px] hover:bg-[#1f1f1f] p-4 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-400 bg-[#2e4a40]"
              : "bg-amber-800 text-white"
          } rounded-lg px-2 py-1`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-9">
        <h1 className="bg-[#025cca] text-white rounded-full p-5 text-xl">
          {initial}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
