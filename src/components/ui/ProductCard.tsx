import { FaCircleArrowRight } from "react-icons/fa6";
// import { cn } from "@/lib/utils"; // optional: if you're using shadcn or clsx

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  className?: string; // allow custom styling
  onClick?: () => void; // make it clickable (for product details)
};

const ProductCard = ({
  name,
  price,
  image,
  // className,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      // className={cn(
      //   "group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
      //   className
      // )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}>
      {/* Image Container */}
      <div className="aspect-w-1 aspect-h-1 relative h-64 bg-gray-50">
        <img
          src={image || "/placeholder-product.jpg"} // fallback image
          alt={name}
          className="h-full w-full object-cover object-center hover:transition-transform duration-500 group-hover:scale-105"
          loading="lazy" // performance boost
        />
        {/* Optional: Sold out / Discount badge can go here */}
      </div>

      <hr className="border-gray-200" />

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
              {name}
            </h3>
            <p className="mt-1 font-bold text-xl text-amber-700">
              KES {price.toLocaleString("en-KE")}
            </p>
          </div>

          {/* Arrow Icon - becomes visible/colorful on hover */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-all group-hover:bg-amber-600 group-hover:text-white">
            <FaCircleArrowRight size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
