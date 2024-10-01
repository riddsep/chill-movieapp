const Input = ({ variant = "primary", className, ...props }) => {
  const baseStyle = `
    w-full 
    bg-transparent
    py-2
    px-3
    border 
    border-gray-300/50 
    rounded-2xl
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-500 
    transition 
    duration-200
    placeholder:text-[#C1C2C4]
    text-[#C1C2C4]
    text-base

  `;
  return <input className={`${baseStyle}${variant} ${className}`} {...props} />;
};
export default Input;
