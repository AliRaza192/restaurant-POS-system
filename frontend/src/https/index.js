export const getRandomBG = () => {
  const colors = [
    "#363636",
    "#262626",
    "#f5f5f5",
    
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return "bg-[" + color + "]";
};
