const Bill = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-sm text-[#ababab] font-medium mt-2">Items(3)</p>
        <h1 className="text-lg text-[#f5f5f5] font-bold">Rs: 1497</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-sm text-[#ababab] font-medium mt-2">Tax(13.45%)</p>
        <h1 className="text-lg text-[#f5f5f5] font-bold">Rs: 199</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Cash
        </button>
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Online
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">
          Print Receipt
        </button>
        <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold">
          Place Order
        </button>
      </div>
    </>
  );
};

export default Bill;
