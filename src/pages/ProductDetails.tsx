import { Link, useParams } from "react-router-dom";
import oops_image from "../assets/oops.jpg";
import { IoCartOutline } from "react-icons/io5";
import products from "../data/product.json";


const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <img
            src={oops_image}
            alt="Product not found"
            className="mx-auto h-48 w-auto object-contain mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry, we couldn’t find that product.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/40">
      {/* Breadcrumb */}
      <nav className="pt-6 px-4 md:px-8 lg:px-12 text-sm text-gray-600">
        <ul className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link>
          </li>
          <span>›</span>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-700 transition-colors">
              Products
            </Link>
          </li>
          <span>›</span>
          <li className="text-gray-900 font-medium truncate max-w-[180px] md:max-w-none">
            {product.name}
          </li>
        </ul>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Product Image – takes more focus on larger screens */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden aspect-4/5 lg:aspect-auto lg:h-[580px] flex items-center justify-center p-6">
            <img
              src={product.image ?? oops_image}
              alt={product.name}
              className="max-h-full w-full object-contain hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              {product.name}
            </h1>

            <div className="text-3xl font-semibold text-gray-900 mb-6">
              KES {product.price.toLocaleString()}
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`
                      px-5 py-2.5 text-sm font-medium rounded-full border border-gray-300
                      hover:border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:ring-offset-2 transition-all
                    `}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                className="
                  flex-1 bg-blue-700 text-white font-semibold py-4 rounded-xl
                  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 transition-all shadow-sm hover:shadow
                ">
                Buy Now
              </button>

              <button
                className="
                  flex-1 flex items-center justify-center gap-2 border-2 border-gray-800
                  text-gray-900 font-semibold py-4 rounded-xl hover:bg-gray-100
                  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
                  transition-all
                ">
                <IoCartOutline size={20} />
                Add to Cart
              </button>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
