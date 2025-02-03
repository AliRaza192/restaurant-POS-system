import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {
  const [selectefMenu, setSelectedMenu] = useState(menus[0]);
  const [itemsCount, setItemsCountCount] = useState(0);
  const [itemId, setItemId] = useState(0);

  const incrementItems = (id) => {
    setItemId(id);
    if (itemsCount >= 4) return;
    setItemsCountCount((prev) => prev + 1);
  };

  const decrementItems = (id) => {
    setItemId(id);

    if (itemsCount <= 0) return;
    setItemsCountCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-center justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelectedMenu(menu);
                setItemId(0);
                setItemsCountCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selectefMenu.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selectefMenu?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.name}
                </h1>
                <button className="bg-[#2e4e40] text-[#02ca3a] cursor-pointer p-2 rounded-lg">
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#ababab] text-lg font-bold">
                  Rs: {menu.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
                  <button
                    onClick={() => decrementItems(menu.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &minus;
                  </button>
                  <span className="text-white">
                    {menu.id === itemId ? itemsCount : "0"}
                  </span>
                  <button
                    onClick={() => incrementItems(menu.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
