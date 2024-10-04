import Continues from "../components/series/Continues";
import Hero from "../components/series/Hero";
import NewRelease from "../components/series/NewRelease";
import Premium from "../components/series/Premium";
import TopRating from "../components/series/TopRating";
import Trending from "../components/series/Trending";

const Series = () => {
  return (
    <>
      <Hero />
      <Continues />
      <Premium />
      <TopRating />
      <Trending />
      <NewRelease />
    </>
  );
};
export default Series;
