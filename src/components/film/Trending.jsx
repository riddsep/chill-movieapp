import Carousel from "../Carousel";
import dataset from "../../data/trending-film.js";
import { Fragment } from "react";
import Chip from "../Chip.jsx";
const Trending = () => {
  const TrendingList = dataset.map((data) => {
    return (
      <Fragment key={data.id}>
        <div className="flex basis-[95px] sm:basis-32 md:basis-40 lg:basis-[234px] lg:min-h-fit shrink-0 relative overflow-hidden">
          <img
            src={data.imageURL}
            alt=""
            className="w-full rounded-sm hover:scale-105 transition-all"
          />
          {data.episode > 0 && <Chip variant={"newEpisode"}>Episode Baru</Chip>}
          {data.istopten && (
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
        Series Trending
      </h1>
      <Carousel>{TrendingList}</Carousel>
    </section>
  );
};
export default Trending;
