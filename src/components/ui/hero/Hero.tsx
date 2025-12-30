const Hero = () => {
  return (
    <div>
      <section className="min-h-[80vh] flex flex-col md:flex-row justify-around mt-[5em] items-center mx-4 bg-gray-800 bg-[url(../assets/hero.jpg)] bg-no-repeat ">
        <div className=" text-start">
          <h1 className="text-[clamp(1rem,10vw,2rem)] font-bold text-black">
            NEW COLLECTIONS{" "}
            <span className="text-white">{new Date().getFullYear()}</span>
          </h1>
          <p className="text-gray-900 text-2xl mb-[10em] ">
            {" "}
            Sustainably sourced, ethically made. <br /> Discover everyday
            essentials that feel good and do very <span className="text-white">good.</span>
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
