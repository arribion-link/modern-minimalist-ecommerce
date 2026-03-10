import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";

const ProductPageHeader = () => {
  return (
    <div className="bg-white sticky top-0 z-10 border-b border-gray-200">
      {/* Category Navigation */}
      <nav className="px-4 sm:px-6 mt-18 lg:px-8 py-4">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base font-medium text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to="/products/men"
              className="hover:text-gray-900 transition-colors duration-200">
              Men
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to="/products/women"
              className="hover:text-gray-900 transition-colors duration-200">
              Women
            </Link>
          </li>
        </ul>
      </nav>

      {/* Title + Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6 pt-2 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Shop the Collection
          </h1>

          <button
            type="button"
            className="
              flex items-center gap-2 px-5 py-2.5 
              text-sm font-medium text-gray-700 
              bg-white border border-gray-300 rounded-lg 
              hover:bg-gray-50 hover:border-gray-400 
              focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 
              transition-all duration-200 shadow-sm
            ">
            <CiFilter size={18} />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageHeader;
