import { useEffect, useState } from "react";

const Greeting = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${month[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-between px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wide">
          Good Morning, Ali Raza
        </h1>
        <p className="text-[#ababab] text-sm">
          Give your best services for customers
        </p>
      </div>
      <div>
        <h1 className="text-3xl text-[#f5f5f5] font-semibold">{formatTime(dateTime)}</h1>
        <p className="text-sm text-[#ababab]">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greeting;
