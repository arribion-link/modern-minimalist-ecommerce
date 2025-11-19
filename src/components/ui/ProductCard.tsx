import { FaCircleArrowRight } from "react-icons/fa6";
type ProductCardProps = {
  name: string,
  price : number
}
// import Products from "../../data/product.json"
const ProductCard = (Props: ProductCardProps) => {
  return (
    <div className="border min-w-[15em] min-h-[30em] bg-white pt-100">
      <div className="top-full border p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">{ Props.name }</h1>
            <p className="text-yellow-900 font-bold">
              KES <span>{ Props.price }</span>
            </p>
          </div>
          <div>
            <FaCircleArrowRight size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
