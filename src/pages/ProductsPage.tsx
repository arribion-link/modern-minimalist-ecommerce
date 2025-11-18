import ProductPageHeader from "../components/ui/ProductPageHeader"
import ProductCard from "../components/ui/ProductCard"
const ProductsPage = () => {
  return (
    <>
      <section className="mt-30 mx-4">
        <ProductPageHeader />
        <div className="grid grid-cols-[repeat(4,minmax(250px,1fr))] gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default ProductsPage
