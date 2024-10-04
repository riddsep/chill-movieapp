import Continues from "../components/home/Continues";
import Hero from "../components/home/Hero";
import NewRelease from "../components/home/NewRelease";
import TopRating from "../components/home/TopRating";
import Trending from "../components/home/Trending";

const Home = () => {
  return (
    <>
      <Hero />
      <Continues />
      <TopRating />
      <Trending />
      <NewRelease />
    </>
  );
};
export default Home;
