// import { Link } from "react-router-dom"
import HomeProduct from "../components/ui/HomeProduct"
import hero_image from "../assets/hero.png"
import CallToAction from "../components/ui/CallToAction";
const Home = () => {
  return (
    <>
      <section className="min-h-[80vh] flex justify-around mt-30 items-center ">
        <div>
          <h1 className="text-[clamp(2rem, 5vw, 4rem)] font-bold text-8xl">
            LAST DANCE
          </h1>
          <p className="text-gray-500 text-2xl my-4">
            {" "}
            Sustainably sourced, ethically made. <br /> Discover everyday essentials
            that feel good and do good.
          </p>
          <button className="border-2 w-80 hover:text-blue-600 p-3 mt-5">GET STARTED</button>
        </div>
        <div>
          <img src={hero_image} alt="" className="rounded-2xl max-w-98 block" />
        </div>
      </section>
      <HomeProduct />
      <CallToAction/>
    </>
  );
}

export default Home
