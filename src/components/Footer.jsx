import { useState } from "react";

const Footer = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <footer className="w-full flex flex-col lg:justify-between lg:flex-row bg-[#212121] p-5 lg:px-20 lg:py-[60px] gap-10">
      <div className="text-[#C1C2C4] text-xs md:text-base">
        <img
          src="./assets/icons/logo.svg"
          alt="logo icon"
          className="mb-3 w-[163px]"
        />
        @2023 Chill All Rights Reserved.
      </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-40 ">
        <div>
          <h1
            className="text-white text-base flex justify-between lg:mb-3 cursor-pointer"
            onClick={() => setShowGenre((prev) => !prev)}
          >
            Genre{" "}
            <img
              src="./assets/icons/drop-icon.svg"
              alt=""
              className="lg:hidden"
            />
          </h1>
          <ul
            className={`text-[#C1C2C4] cursor-pointer transition-all duration-300 ease-in-out ${
              showGenre ? "block" : "hidden"
            } lg:block`}
          >
            <div className="lg:flex gap-7">
              <ul>
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
              <ul>
                <li>Drama</li>
                <li>Fantasi Ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
              </ul>
              <ul>
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
              </ul>
              <ul>
                <li>Sains & Alam</li>
                <li>Thriller</li>
              </ul>
            </div>
          </ul>
        </div>
        <div>
          <h1
            className="text-white text-base flex justify-between lg:mb-3 cursor-pointer"
            onClick={() => setShowHelp((prev) => !prev)}
          >
            Bantuan{" "}
            <img
              src="./assets/icons/drop-icon.svg"
              alt=""
              className="lg:hidden"
            />
          </h1>
          <ul
            className={`text-[#C1C2C4] cursor-pointer transition-all duration-300 ease-in-out ${
              showHelp ? "block" : "hidden"
            } lg:block`}
          >
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
