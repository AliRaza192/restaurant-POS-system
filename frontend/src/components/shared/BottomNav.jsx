import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Model from "./Model";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  const incrementGuest = () => {
    if (guestCount >= 8) return;
    setGuestCount((prev) => prev + 1);
  };

  const decrementGuest = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  // const incrementGuest = () => setGuestCount((prev) => prev + 1);
  // const decrementGuest = () => setGuestCount((prev) => prev - 1);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#262626] p-2 h-16 flex  justify-around">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[15px]"
      >
        <FaHome className="inline mr-4" size={20} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#f5f5f5]  w-[200px] rounded-[15px]"
      >
        <MdOutlineReorder className="inline mr-4" size={20} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-[#f5f5f5]  w-[200px] rounded-[15px]"
      >
        <MdTableBar className="inline mr-4" size={20} />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5]  w-[200px] rounded-[15px]">
        <CiCircleMore className="inline mr-4" size={20} />
        <p>More</p>
      </button>
      <button
        onClick={openModel}
        className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <BiSolidDish size={30} />
      </button>
      <Model isOpen={isModelOpen} onClose={closeModel} title="Create Order">
        <div>
          <label
            className="block text-[#ababab] mb-2 text-sm font-medium"
            htmlFor=""
          >
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name=""
              placeholder="Enter customer name"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-[#ababab] mb-2  mt-3 text-sm font-medium"
            htmlFor=""
          >
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              name=""
              placeholder="+92-98765432"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-[#ababab] mb-2 mt-3 text-sm font-medium"
          >
            Guest
          </label>
          <div className="flex items-center justify-between bg-[#1f1f1f px-4 py-3 rounded-lg]">
            <button
              onClick={decrementGuest}
              className="text-yellow-500 text-2xl cursor-pointer"
            >
              &minus;
            </button>
            <span className="text-white">{guestCount} Person</span>
            <button
              onClick={incrementGuest}
              className="text-yellow-500 text-2xl cursor-pointer"
            >
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/tables")}
          className="w-full cursor-pointer bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-amber-700"
        >
          Create Order
        </button>
      </Model>
    </div>
  );
};

export default BottomNav;
