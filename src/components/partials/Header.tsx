import { Link, NavLink } from "react-router-dom"
import SearchBar from "../ui/SearchBar"
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <header className=" flex justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-black text-white w-full shadow-md">
      <div className="">
        <Link to="">Arribion_Codnify</Link>
      </div>
      <nav className="flex gap-5">
        <ul className="flex gap-4">
          <li>
            <NavLink to="">Products</NavLink>
          </li>
          <li>
            <NavLink to="">Contact</NavLink>
          </li>
          <li>
            <NavLink to="">About Us</NavLink>
          </li>
        </ul>
        <SearchBar />
      </nav>
      <div className="flex gap-03">
        <FaGithub />
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header
