const Chip = ({ variant, children }) => {
  const variants = {
    newEpisode:
      "bg-[#0F1E93] text-white text-[6px] md:text-sm absolute top-0  rounded-2xl px-[5px] py-[2px] m-2",
    topTen:
      "bg-[#B71F1D] flex flex-col items-center text-white text-[6px] md:text-sm absolute top-0 right-0 font-bold rounded-tr-sm md:rounded-tr-md rounded-bl-sm md:rounded-bl-md p-[2px] mr-2",
  };

  return <div className={`text-white ${variants[variant]} `}>{children}</div>;
};

export default Chip;
