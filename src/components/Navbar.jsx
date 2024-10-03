const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#212121] w-full text-white p-4 md:py-6  md:px-6 lg:px-20 relative">
      <ul className="flex items-center gap-3 text-sm md:text-base md:gap-6 lg:gap-20">
        <li>
          <img
            src="./assets/icons/logo-small.svg"
            alt=""
            className="min-w-10 md:hidden"
          />
          <img
            src="./assets/icons/logo.svg"
            alt=""
            className="min-w-10 hidden md:block lg:min-w-32"
          />
        </li>
        <li className="cursor-pointer">Series</li>
        <li className="cursor-pointer">Film</li>
        <li className="cursor-pointer">Daftar Saya</li>
      </ul>
      <div className="flex items-center gap-2 cursor-pointer group py-2">
        <img
          src="./assets/icons/profile.svg"
          alt="profile image"
          className="w-8 lg:min-w-11"
        />
        <img
          src="./assets/icons/dropdown.svg"
          alt=""
          className="w-3 group-hover:rotate-180 transition-all"
        />

        <ul className="absolute bg-[#181a1c] text-sm md:text-base text-white p-3 top-[70%]  right-[2%] lg:right-[4%] rounded invisible group-hover:visible drop-shadow-xl">
          <li className="flex items-center gap-2 px-3 py-2 hover:text-blue-600  ">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 fill-current "
              viewBox="0 0 16 16"
            >
              <path d="M7.9998 2.6667a2.6667 2.6667 0 1 1 0 5.3334 2.6667 2.6667 0 0 1 0-5.3333Zm0 6.6667c2.9467 0 5.3334 1.1933 5.3334 2.6667v1.3333H2.6665v-1.3333c0-1.4734 2.3867-2.6667 5.3333-2.6667Z" />
            </svg>
            Profile Saya
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 ">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 fill-current "
              viewBox="0 0 16 16"
            >
              <path d="m8.0002 11.5133 4.12 2.4866-1.0934-4.6867 3.64-3.1533-4.7933-.4133-1.8733-4.4133-1.8734 4.4133-4.7933.4133 3.6333 3.1533L3.8802 14l4.12-2.4866Z" />
            </svg>
            Ubah Premium
          </li>
          <li className="flex items-center gap-2 px-3 py-2 hover:text-blue-600">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 fill-current "
              viewBox="0 0 16 16"
            >
              <path d="M12.6667 2H3.3333C2.5933 2 2 2.5933 2 3.3333V6h1.3333V3.3333h9.3334v9.3334H3.3333V10H2v2.6667A1.3335 1.3335 0 0 0 3.3333 14h9.3334A1.3336 1.3336 0 0 0 14 12.6667V3.3333C14 2.5933 13.4 2 12.6667 2ZM6.72 10.3867l.9467.9466L11 8 7.6667 4.6667l-.9467.94 1.7267 1.7266H2v1.3334h6.4467l-1.7267 1.72Z" />
            </svg>
            Keluar
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
