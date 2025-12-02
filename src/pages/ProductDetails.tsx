import { Link, useParams } from "react-router-dom";
import oops_image from "../assets/oops.jpg";
import { IoCartOutline } from "react-icons/io5";
import products from "../data/product.json";

type Product = {
  id: number | string;
  name: string;
  price: number;
  description: string;
  image?: string;
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p: Product) => p.id.toString() === id) as
    | Product
    | undefined;

  if (!product) {
    return (
      <div className="mt-[10em] flex justify-center">
        <div>
          <img src={oops_image} alt="not found" className="max-w-[15em]" />
          <h1 className="text-3xl font-bold text-red-500 text-center">
            Oops Something Went wrong!!!
          </h1>
          <h2 className="text-center text-2xl">
            can't get the product details
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-30 min-h-[50vh] mx-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <hr className="my-4" />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-gray-100 rounded-2xl min-w-[25em] min-h-[40vh] flex items-center justify-center">
          <img
            src={product.image ?? oops_image}
            alt={product.name}
            className="max-w-full max-h-[20em]"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl mb-2">{product.name}</h1>
          <h2 className="text-yellow-400 font-bold text-2xl mb-2">
            KES <span>{product.price}</span>
          </h2>

          <div className="flex  gap-4 mb-8">
            <span className="bg-gray-300 p-2 rounded border cursor-pointer hover:border-blue-500">
              S
            </span>
            <span className="bg-gray-300 p-2 rounded border cursor-pointer hover:border-blue-500">
              M
            </span>
            <span className="bg-gray-300 p-2 rounded border cursor-pointer hover:border-blue-500">
              L
            </span>
            <span className="bg-gray-300 p-2 rounded border cursor-pointer hover:border-blue-500">
              XL
            </span>
            <span className="bg-gray-300 p-2 rounded border cursor-pointer hover:border-blue-500">
              XXL
            </span>
          </div>

          <hr />

          <div className="flex gap-4">
            <button className="bg-blue-700 border rounded-2xl w-[10em] font-bold my-4 py-2">
              BUY NOW
            </button>
            <button className="flex gap-4 border rounded-2xl w-[10em] font-bold items-center my-4">
              <IoCartOutline /> ADD TO CART
            </button>
          </div>

          <hr />

          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
