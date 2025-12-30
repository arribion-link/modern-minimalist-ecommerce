// import { Link } from "react-router-dom"
import HomeProduct from "../components/ui/featured/HomeProduct";
import Hero from "../components/ui/hero/Hero";
import CallToAction from "../components/ui/call2action/CallToAction";
import Discover from "../components/ui/discover/Discover";
import Collection from "../components/ui/collections/Collection";
import Brands from "../components/ui/brands/Brands";
const Home = () => {
  return (
    <>
      <Hero />
      <Brands/>
      <Collection/>
      <HomeProduct />
      <Discover />
      <CallToAction />
    </>
  );
};

export default Home;
