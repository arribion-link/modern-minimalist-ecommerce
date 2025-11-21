import ProductPageHeader from "../components/ui/ProductPageHeader"
import ProductCard from "../components/ui/ProductCard"
import products from "../data/product.json"
import { Link } from "react-router-dom"
const ProductsPage = () => {
  return (
    <>
      <section className="mt-30 mx-4">
        <ProductPageHeader />
        <div className="grid grid-cols-[repeat(4,minmax(250px,1fr))] gap-4">
          {products.map((product) => (
            <Link to="/product/details/:id">
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
