import { Link } from "react-router-dom";
import ProductPageHeader from "../components/ui/ProductPageHeader";
import ProductCard from "../components/ui/ProductCard";
import products from "../data/product.json";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/40">
      {/* Header stays at top (already sticky in your updated ProductPageHeader) */}
      <ProductPageHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6 lg:pt-8">
        {/* Optional: small message when no products (future-proof) */}
        {products.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-xl text-gray-500">No products found.</p>
            <p className="mt-2 text-gray-600">
              Try adjusting your filters or check back later.
            </p>
          </div>
        ) : (
          <div
            className="
              grid gap-6 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              xl:grid-cols-5
            ">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/details/${product.id}`}
                className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl">
                <ProductCard
                  price={product.price}
                  name={product.name}
                  image={product.image}
                  // You can pass more props later (e.g. discount, rating, isNew…)
                />
              </Link>
            ))}
          </div>
        )}

        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
