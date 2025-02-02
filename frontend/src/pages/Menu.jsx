import { MdRestaurantMenu } from "react-icons/md";
import BackButton from "../components/shared/BackButton";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4 ">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl tracking-wide font-bold">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-sm text-[#f5f5f5] font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Table No: 5
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* Right Side */}
      <div className="flex-[1]  bg-blue-400"></div>
    </section>
  );
};

export default Menu;
