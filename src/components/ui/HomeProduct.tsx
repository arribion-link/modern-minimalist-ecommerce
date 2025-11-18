
import ProductCard from './ProductCard'

const HomeProduct = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-60 mx-[1em] rounded-2xl p-8 ">
        <h1 className="text-center font-bold text-5xl m-9 text-blue-400">
          FEATURED PRODUCT
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default HomeProduct
