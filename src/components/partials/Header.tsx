import { Link, NavLink } from "react-router-dom"
import SearchBar from "../ui/SearchBar"
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <header className=" flex justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-black text-white w-full shadow-md">
      <div className="font-bold text-3xl">
        <Link to="">Arribion</Link>
      </div>
      <nav className="flex gap-5 items-center">
        <ul className="flex gap-4">
          <li className="nav-link">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="">Contact</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="">About Us</NavLink>
          </li>
        </ul>
        <SearchBar />
      </nav>
      <div className="flex gap-3 items-center">
        <FaGithub size={35} />
        <button className="text-black bg-white w-[10em] p-2 rounded-4xl font-bold">Login</button>
      </div>
    </header>
  );
}

export default Header
