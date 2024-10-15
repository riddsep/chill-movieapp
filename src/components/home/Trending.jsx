import Carousel from "../Carousel";
import { Fragment, useEffect, useState } from "react";
import { getMovies } from "../../services/api/movies-api-endpoints.js";
import Chip from "../Chip.jsx";
const Trending = () => {
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

  const TrendingList = films.map((data) => {
    return (
      <Fragment key={data.id}>
        <div className="flex basis-[95px] min-h-40 lg:h-[365px] rounded-md sm:basis-32 md:basis-40 lg:basis-[234px] lg:min-h-fit shrink-0 relative overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            loading="lazy"
            className="w-full hover:scale-105 transition-all object-cover object-center"
          />
          {data.episode > 0 && <Chip variant={"newEpisode"}>Episode Baru</Chip>}
          {data.rank <= 10 && (
            <Chip variant={"topTen"}>
              Top <span>10</span>
            </Chip>
          )}
        </div>
      </Fragment>
    );
  });

  return (
    <section className="w-full bg-[#212121] p-5  lg:px-20 lg:py-10 relative">
      <h1 className="text-white text-xl md:text-2xl md:text-[32px] font-bold mb-5 lg:mb-8">
        Film Trending
      </h1>
      <Carousel>{TrendingList}</Carousel>
    </section>
  );
};
export default Trending;
