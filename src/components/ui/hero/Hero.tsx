const Hero = () => {
  return (
    <div>
      <section className="min-h-[80vh] flex flex-col md:flex-row justify-around mt-12 items-center mx-4 ">
        <div>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-yellow-500">
            Curated collection <br /> of timeless essentials
          </h1>
          <p className="text-gray-500 my-4">
            {" "}
            Sustainably sourced, ethically made. <br /> Discover everyday
            essentials that feel good and do good.
          </p>
        </div>
        <div>
          {/* <img src={hero_image} alt="" className="rounded-2xl max-w-71 block" /> */}
        </div>
      </section>
    </div>
  );
}

export default Hero
