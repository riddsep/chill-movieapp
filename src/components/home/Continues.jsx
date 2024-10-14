import Carousel from "../Carousel";
import { Fragment, useEffect, useState } from "react";
import { getMovies } from "../../services/api/movies-api-endpoints";
const Continues = () => {
  const [films, setFilms] = useState([]);
  async function fetchMovies() {
    try {
      const result = await getMovies();
      setFilms(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  const filmList = films.map((data) => {
    return (
      <Fragment key={data.id}>
        <div className="flex basis-[309px] h-40 lg:h-48 lg:basis-[326px] shrink-0 relative">
          <img
            src={data.image}
            alt=""
            className="w-full rounded-lg object-cover object-center"
            loading="lazy"
          />
          <div className="text-white bg-gradient-to-t from-black rounded-lg w-full p-4 text-sm font-semibold flex justify-between items-center absolute bottom-0">
            {data.title}
            <span className="flex items-center gap-1">
              <img src="/assets/icons/star.svg" alt={data.title} />
              {data.rating.toFixed(1)}/5
            </span>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <section className="w-full bg-[#212121] p-5  lg:px-20 lg:py-10 relative">
      <h1 className="text-white text-xl md:text-2xl md:text-[32px] font-bold mb-5 lg:mb-8">
        Melanjutkan Tonton Film
      </h1>
      <Carousel>{filmList}</Carousel>
    </section>
  );
};
export default Continues;
