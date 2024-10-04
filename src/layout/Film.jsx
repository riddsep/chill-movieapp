import Continues from "../components/film/Continues";
import Hero from "../components/film/Hero";
import NewRelease from "../components/film/NewRelease";
import TopRating from "../components/film/TopRating";
import Trending from "../components/film/Trending";
import Premium from "../components/series/Premium";

const Film = () => {
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
export default Film;
