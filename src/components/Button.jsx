const Button = ({
  variant = "primary",
  children,
  addition,
  onClick,
  ...props
}) => {
  const baseStyle = "py-2 px-3 rounded-2xl font-base transition duration-300";

  const variants = {
    primary: `${baseStyle} bg-[#09147A] text-white hover:bg-[#192DB7] `,
    outline: `${baseStyle} border border-[#3254FF] text-[#3254FF] hover:bg-[#3254FF] hover:text-white`,
    secondary: `${baseStyle} border border-gray-300/50 bg-[#3D4142] text-white hover:bg-[#2F3334]`,
    secondaryOutline: `${baseStyle} border-0 text-white bg-[#22282A]  hover:bg-[#2F3334] hover:text-white`,
  };

  return (
    <button
      className={`${variants[variant]} ${addition}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
