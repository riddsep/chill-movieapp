import Continues from "../components/film/Continues";
import Hero from "../components/film/Hero";
import NewRelease from "../components/film/NewRelease";
import TopRating from "../components/film/TopRating";
import Trending from "../components/film/Trending";

const Film = () => {
  return (
    <>
      <Hero />
      <Continues />
      <Trending />
      <TopRating />
      <NewRelease />
    </>
  );
};
export default Film;
