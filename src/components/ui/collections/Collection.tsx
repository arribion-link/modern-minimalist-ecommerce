// import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

const Collection = () => {
    return (
      <>
        <section className="mx-4 my-[15em]">
          <div className="flex justify-between my-[3em]">
            <h1 className="text-[clamp(2em,6vw,3em)] font-bold">
              {" "}
              TOP NEW ARRIVALS
            </h1>
            <button className="bg-black mt-4 text-white py-3 px-6 rounded-3xl flex items-center gap-6">
              DISCOVER COLLECTIONS <FaArrowRightLong size={20} />{" "}
            </button>
          </div>
          <div className="flex flex-col md:flex-row  min-h-[70vh] gap-4 md:gap-2 ">
            <div
              className="
              bg-[url(../assets/collection1.jpg)]
          flex-1 
          min-h-[50vh]
          bg-gray-600 
          rounded-2xl 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1500 
          ease-[cubic-bezier(0.16,1,0.3,1)] 
     
          hover:shadow-2xl 
          shadow-md
          overflow-hidden
        ">
              <h1 className="text-4xl min-h-[] bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                01
              </h1>
            </div>
            <div
              className="
                bg-[url(../assets/collection2.jpg)]
                bg-center
                bg-cover
          flex-1 
          min-h-[50vh]
          bg-gray-600 
          rounded-2xl 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1500 
          ease-[cubic-bezier(0.16,1,0.3,1)] 
       
          hover:shadow-2xl 
          shadow-md
        ">
              <h1 className="text-4xl bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                02
              </h1>
            </div>
            <div
              className="
                bg-[url(../assets/collection3.jpg)]
                bg-center
                bg-cover
                min-h-[50vh]
          flex-1 
          bg-gray-600 
          rounded-2xl 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1500 
          ease-[cubic-bezier(0.16,1,0.3,1)] 
       
          hover:shadow-2xl 
          shadow-md
        ">
              <h1 className="text-4xl bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                03
              </h1>
            </div>
            {/* DIFFERENT TRANSITION */}
            <div
              className="
                bg-[url(../assets/collection4.jpg)]
                bg-center
                bg-cover
                min-h-[50vh]
          w-full 
          bg-gray-600 
          rounded-2xl 
          flex-1 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1200 
          ease-out 
        
          origin-center
          shadow-lg 
          hover:shadow-2xl
        ">
              <h1 className="text-4xl bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                04
              </h1>
            </div>
            <div
              className="
                bg-[url(../assets/collection5.jpg)]
                  bg-center
                bg-cover
                min-h-[50vh]
          w-full 
          bg-gray-600 
          rounded-2xl 
          flex-1 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1200 
          ease-out 
        
          origin-center
          shadow-lg 
          hover:shadow-2xl
        ">
              <h1 className="text-4xl m-3 bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                05
              </h1>
            </div>
            <div
              className="
                bg-[url(../assets/collection6.jpg)]
                min-h-[50vh]
          w-full 
          bg-gray-600 
          rounded-2xl 
          flex-1 
          hover:flex-6 
          hover:z-10 
          transition-all 
          duration-1200 
          ease-out 
       
          origin-center
          shadow-lg 
          hover:shadow-2xl
        ">
              <h1 className="text-4xl bg-slate-200 text-white rounded-4xl py-2 px-3 w-fit">
                06
              </h1>
            </div>
          </div>
        </section>
      </>
    );
}

export default Collection
