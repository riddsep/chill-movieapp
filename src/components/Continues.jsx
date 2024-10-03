import Carousel from "./Carousel";
import dataset from "../data/continues-film";
import { Fragment } from "react";
const Continues = () => {
  const filmList = dataset.map((data) => {
    return (
      <Fragment key={data.id}>
        <div className="flex basis-[309px] shrink-0 relative">
          <img src={data.imageURL} alt="" className="w-full" />
          <div className="text-white bg-gradient-to-t from-black w-full p-4 text-sm font-semibold flex justify-between items-center absolute bottom-0">
            {data.title}
            <span className="flex items-center gap-1">
              <img src="./assets/icons/star.svg" alt={data.title} />
              {data.rating}/5
            </span>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <section className="w-full bg-[#212121] p-5 relative">
      <h1 className="text-white text-xl font-bold mb-5">
        Melanjutkan Tonton Film
      </h1>
      <Carousel>{filmList}</Carousel>
    </section>
  );
};
export default Continues;
