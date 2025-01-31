import { popularDishes } from "../../constants";
const PopulerDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold">
            Recent Orders
          </h1>
          <a href="#" className="text-[#025cca] text-sm font-semibold">
            View All
          </a>
        </div>

        <div>
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6"
              >
                <h1 className="text-[#f5f5f5] font-bold text-xl mr-5">
                  {dish.id ? `0${dish.id}` : dish.id}
                </h1>
                <div className="flex items-center gap-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-[50px] h-[50px] rounded-lg"
                  />
                  <div>
                    <h1 className="text-[#f5f5f5] font-semibold">
                      {dish.name}
                    </h1>
                    <p className="text-[#a5a5a5] text-xs ">
                      <span className="text-[#ababab]">Orders: </span>
                      {dish.numberOfOrders}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopulerDishes;
