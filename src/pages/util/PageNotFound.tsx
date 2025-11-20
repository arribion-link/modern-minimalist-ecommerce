import nfi from "../../assets/page-not-found.jpg"
const PageNotFound = () => {
  return (
    <section className="mt-20 mx-4">
      <img src={nfi} alt="" className="max-w-80" />
      <h1 className='text-5xl'>404 page not Found</h1>
    </section>
  )
}

export default PageNotFound
