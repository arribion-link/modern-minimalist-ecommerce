// import React from 'react'

const CallToAction = () => {
  return (
    <>
      <section className="rounded-2xl min-h-[40vh] bg-black my-20 mx-4 p-[1em]">
        <div className="text-white text-center ">
            <h1 className="font-bold text-[clamp(2em,5vw,3em)] my-5">SUBSCRIBE FOR EXCLUSIVE <br /> FASHION INSIGNT</h1>
            <p>
                Discover our curated collection of timeless essentials <br /> designed to
                make you feel your best.
            </p>
          <div className="flex justify-center my-[2em] ">
            <form action="" className="bg-white items-center py-2 flex justify-between rounded-4xl px-4 w-[50vw]">
              <div>
                <label htmlFor="email"></label>
                <input type="email" placeholder="SUBSCRIBE" className="text-slate-700 w-full p-3 focus:outline-none" />
              </div>
              <button className="bg-black min-w-[em] py-3 px-6 font-bold rounded-3xl">SUBSCRIBE</button>
            </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction
