// import { Link } from "react-router-dom"
import HomeProduct from "../components/ui/HomeProduct"
import hero_image from "../assets/hero.jpg"
const Home = () => {
  return (
    <>
      <section className="h-screen w-full bg-no-repeat bg-center flex justify-around mt-20 ">
        <div>
          <h1 className="text-[clamp(1.5rem, 5vw, 3rem)]">LAST DANCE</h1>
          <p>
            {" "}
            Sustainably sourced, ethically made. Discover everyday essentials
            that feel good and do good.
          </p>
          <button>GET STARTED</button>
        </div>
        <div>
          <img src={hero_image} alt="" className="rounded-2xl max-w-80" />
        </div>
      </section>
      <HomeProduct />
    </>
  );
}

export default Home
