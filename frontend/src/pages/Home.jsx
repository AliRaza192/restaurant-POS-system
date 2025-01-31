import Greeting from "../components/home/Greeting";
import MiniCard from "../components/home/MiniCard";
import PopulerDishes from "../components/home/PopulerDishes";
import RecentOrders from "../components/home/RecentOrders";
import BottomNav from "../components/shared/BottomNav";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Side */}
      <div className="flex-[3]">
        <Greeting />
        <div className="flex w-full items-center gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earning"
            icons={<BsCashCoin />}
            number={512}
            footerNum={1.5}
          />
          <MiniCard
            title="In Progress"
            icons={<GrInProgress />}
            number={16}
            footerNum={3.5}
          />
        </div>
        <RecentOrders />
      </div>

      {/* Right Side */}
      <div className="flex-[2] ">
        <PopulerDishes />
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
