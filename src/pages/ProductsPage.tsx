import ProductPageHeader from "../components/ui/ProductPageHeader"
import ProductCard from "../components/ui/ProductCard"
import products from "../data/product.json"
import { Link } from "react-router-dom"
const ProductsPage = () => {
  return (
    <>
      <section className="mt-30 mx-4">
        <ProductPageHeader />
        <div className="grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {" "}
          {products.map((product) => (
            <Link to={`/product/details/${product.id}`}>
              <ProductCard
                price={product.price}
                name={product.name}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage
