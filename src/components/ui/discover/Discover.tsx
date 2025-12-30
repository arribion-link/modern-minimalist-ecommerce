// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6"
import { GoArrowUpRight } from "react-icons/go";
const Discover = () => {
  return (
    <>
      <section className="mx-4 my-[10em] ">
        <h1 className="text-[clamp(2em,6vw,3em)] font-bold">
          {" "}
          UNLISH YOUR FASHION FANTASY
        </h1>
        <button className="bg-black mt-4 text-white py-3 px-6 rounded-3xl flex items-center gap-6">
          DISCOVER COLLECTIONS <FaArrowRightLong size={20} />{" "}
        </button>
        <div className="grid grid-cols-2 gap-6 mt-[5em] ">
          <div className=" bg-[url(../assets/discover1.jpg)] bg-center bg-cover min-h-[70vh] bg-gray-400 rounded-2xl">
            <GoArrowUpRight size={50} className="text-white top-4 right-4" />
          </div>
          <div className=" bg-[url(../assets/discover2.jpg)] bg-center bg-cover  min-h-[70vh] bg-gray-400 rounded-2xl">
            <GoArrowUpRight size={50} className="text-black top-4 right-4" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover
