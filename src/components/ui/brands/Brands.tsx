// import React from 'react'

const Brands = () => {
  return (
    <>
      <section className="mx-4 min-h-screen my-[5em]">
        <hr className="text-slate-300" />
        <div className="py-[4em] "></div>
        <hr className="text-slate-300" />
        <div className="grid grid-cols-3 gap-3 mt-[3em] ">
          <div className="bg-slate-600 rounded-2xl min-h-[40vh] col-span-2 row-span-2 bg-[url(../assets/img1.jpg)] bg-center bg-cover "></div>
          <div className="bg-slate-600 rounded-2xl min-h-[40vh] bg-[url(../assets/img2.jpg)] bg-center bg-cover"></div>
          <div className="bg-slate-600 rounded-2xl min-h-[40vh] bg-[url(../assets/img3.jpg)] bg-center bg-cover"></div>
        </div>
      </section>
    </>
  );
}

export default Brands
