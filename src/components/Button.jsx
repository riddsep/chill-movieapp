const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyle = "py-2 px-4 rounded-md font-bold transition duration-300";

  const variants = {
    primary: `${baseStyle} bg-[#09147A] text-white hover:bg-[#192DB7]`,
    outline: `${baseStyle} border border-[#3254FF] text-[#3254FF] hover:bg-[#3254FF] hover:text-white`,
    secondary: `${baseStyle} bg-[#2F3334] text-white hover:bg-[#2F3334]`,
    secondaryOutline: `${baseStyle} border border-[#2F3334] text-[#2F3334] hover:bg-[#2F3334] hover:text-white`,
  };

  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
};
export default Button;
