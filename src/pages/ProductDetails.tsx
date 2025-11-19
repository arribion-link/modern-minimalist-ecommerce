import { Link } from "react-router-dom"

const ProductDetails = () => {
  return (
    <section className="mt-30 min-h-[50vh] mx-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
      </ul>

          <div>
              
      </div>
    </section>
  );
}

export default ProductDetails
