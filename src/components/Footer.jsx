const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#212121] p-5  lg:px-20 lg:py-10 gap-10">
      <div className="text-[#C1C2C4]">
        <img
          src="./assets/icons/logo.svg"
          alt="logo icon"
          className="mb-3 text-xs"
        />
        @2023 Chill All Rights Reserved.
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-white text-base flex justify-between">
            Genre <img src="./assets/icons/drop-icon.svg" alt="" />
          </h1>
          <div className="hidden">
            <ul className="text-[#C1C2C4]">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
            <ul className="text-[#C1C2C4]">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
            <ul className="text-[#C1C2C4]">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
            <ul className="text-[#C1C2C4]">
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-white text-base flex justify-between">
            Bantuan <img src="./assets/icons/drop-icon.svg" alt="" />
          </h1>
          <ul className="text-[#C1C2C4] hidden">
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
