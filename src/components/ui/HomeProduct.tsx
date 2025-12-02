import ProductCard from "./ProductCard";
import products from "../../data/product.json";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const bestSellers = products.filter((product) => product.bestSeller === true);

  return (
    <section className="bg-gray-50 min-h-60 mx-[1em] rounded-2xl p-8">
      <h1 className="text-center font-bold text-3xl mb-12 text-blue-500">
        FEATURED PRODUCTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {bestSellers.length > 0 ? (
          bestSellers.map((product) => (
            <Link key={product.id} to={`/product/details/${product.id}`}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No featured products yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default HomeProduct;
