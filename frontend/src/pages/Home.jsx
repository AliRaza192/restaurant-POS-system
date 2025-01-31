import BottomNav from "../components/shared/BottomNav";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Side */}
      <div className="flex-[3] bg-red-400"></div>

      {/* Right Side */}
      <div className="flex-[2] bg-blue-400"></div>
      <BottomNav />
    </section>
  );
};

export default Home;
