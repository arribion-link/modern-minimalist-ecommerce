import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
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

      <hr className="my-4" />

      <div className="flex gap-8">
        <div>
          <div className="bg-blue-400 rounded-2xl min-w-[15em] min-h-[40vh]">
            <img src="" alt="" />
          </div>
          {/* <div className="flex gap-4">
            <div className="bg-blue-500 w-[10em] h-[10em] rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-blue-500 w-[10em] h-[10em] rounded-2xl">
              <img src="" alt="" />
            </div>
            <div className="bg-blue-500 w-[10em] h-[10em] rounded-2xl">
              <img src="" alt="" />
            </div>
          </div> */}
        </div>
        <div>
          <h1>Name</h1>
          <h2>KES 12,000</h2>
          <div>
            colors
            <div>
              <span>RED</span>
              <span>RED</span>
              <span>RED</span>
            </div>
          </div>
          <div>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
          <hr />
          <div className="flex gap-4">
            <button className="bg-blue-700 border rounded-2xl w-[10em] font-bold my-4 ">
              BUY NOW
            </button>
            <button className="flex gap-4 border rounded-2xl w-[10em] font-bold items-center my-4">
              <IoCartOutline /> ADD TO CART
            </button>
          </div>
          <hr />
          <p>Description</p>
        </div>

        <div className="bg-blue-50 w-[30em] h-[30em] rounded-2xl"></div>
      </div>
    </section>
  );
}

export default ProductDetails
