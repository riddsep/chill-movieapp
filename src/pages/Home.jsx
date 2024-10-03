import Continues from "../components/Continues";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewRelease from "../components/NewRelease";
import TopRating from "../components/TopRating";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Continues />
      <TopRating />
      <Trending />
      <NewRelease />
      <Footer />
    </>
  );
};
export default Home;
