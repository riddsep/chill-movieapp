import Carousel from "./Carousel";
import dataset from "../data/top-rating.js";
import { Fragment } from "react";
const Trending = () => {
  const TrendingList = dataset.map((data) => {
    return (
      <Fragment key={data.id}>
        <div className="flex basis-[95px] lg:basis-[234px] lg:min-h-fit shrink-0 relative ">
          <img src={data.imageURL} alt="" className="w-full rounded-lg" />
        </div>
      </Fragment>
    );
  });

  return (
    <section className="w-full bg-[#212121] p-5  lg:px-20 lg:py-10 relative">
      <h1 className="text-white text-xl md:text-2xl md:text-[32px] font-bold mb-5 lg:mb-8">
        Top Rating Film dan Series Hari ini
      </h1>
      <Carousel>{TrendingList}</Carousel>
    </section>
  );
};
export default Trending;
