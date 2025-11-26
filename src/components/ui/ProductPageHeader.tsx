import { Link } from "react-router-dom"
import { CiFilter } from "react-icons/ci";
const ProductPageHeader = () => {
  return (
    <>
      <hr />
      <div>
        <ul className="flex gap-8">
          <li>
            <Link to="">Home Page</Link>
          </li>
          <li>
            <Link to="">Men</Link>
          </li>
          <li>
            <Link to="">Women</Link>
          </li>
        </ul>
        <hr className="my-8" />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 mt-8">
              Shop the Collection
            </h1>
          </div>
          <div className="flex items-center gap-4 border rounded px-4 py-2 ">
            <CiFilter />
            filter
          </div>
        </div>
      </div>
      <hr className="mb-8" />
    </>
  );
}

export default ProductPageHeader
