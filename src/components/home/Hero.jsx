const Hero = () => {
  return (
    <section className="flex flex-col justify-end gap-3 w-full max-h-[587px] aspect-video bg-hero bg-no-repeat bg-cover px-5 lg:px-20 pb-10 lg:pb-[73px] ">
      <h1 className="text-2xl md:text-3xl font-bold text-white lg:text-5xl lg:mb-5">
        Duty After School
      </h1>
      <p className="text-xs md:text-sm lg:text-lg md:pr-44 lg:w-[820px] text-ellipsis lg:line-clamp-none line-clamp-2 text-white lg:mb-10 ">
        Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
        Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
        siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
        dalam perang.
      </p>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <button className="py-1 lg:py-2 px-3 lg:px-6 text-white text-xs lg:text-base bg-[#0F1E93] rounded-[48px]">
            Mulai
          </button>
          <button className="flex gap-1 items-center py-1 lg:py-2 px-3 lg:px-6 text-white text-xs lg:text-base bg-[#22282A] rounded-[48px]">
            <img
              src="./assets/icons/information-outline.svg"
              alt="information icon"
              loading="lazy"
              decoding="async"
              className="w-3 lg:w-5"
            />{" "}
            Selengkapnya
          </button>
          <span className="flex items-center gap-1 text-xs lg:text-base text-white border border-white p-1 lg:p-2 rounded-[24px]">
            18+
          </span>
        </div>
        <button className="flex items-center gap-1 lg:scale-150 text-white border border-white p-[6px] rounded-[24px]">
          <img src="./assets/icons/sound.svg" alt="sound icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
