import { FaCircleArrowRight } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="border min-w-[20em] min-h-[30em] bg-white pt-100">
      <div className="top-full border p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1>Product Name</h1>
            <p>
              KES <span>12,00</span>
            </p>
          </div>
          <div>
            <FaCircleArrowRight size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
