import ProductPageHeader from "../components/ui/ProductPageHeader"
import ProductCard from "../components/ui/ProductCard"
import products from "../data/product.json"
const ProductsPage = () => {
  return (
    <>
      <section className="mt-30 mx-4">
        <ProductPageHeader />
        <div className="grid grid-cols-[repeat(4,minmax(250px,1fr))] gap-4">
          {products.map((product) => (
            <ProductCard price={product.price} name={product.name} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage
