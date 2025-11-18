import { Link } from "react-router-dom"

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
        <h1 className="text-4xl font-bold mb-9 mt-8">Shop the Collection</h1>
      </div>
      <hr />
    </>
  );
}

export default ProductPageHeader
