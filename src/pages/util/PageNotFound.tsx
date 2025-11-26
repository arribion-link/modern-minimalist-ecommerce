import nfi from "../../assets/page-not-found.jpg"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
const PageNotFound = () => {
  return (
    <section className="mt-20 mx-4 flex justify-center">
      <div className="">
        <img src={nfi} alt="" className="max-w-80" />
        <h1 className="text-5xl">404 page not Found</h1>
        <Link to="/" className="flex gap-2 items-center text-center m-4 justify-center">
          {" "}
          <FaArrowLeftLong size={20} /> Go to safety
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound
