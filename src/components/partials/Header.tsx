import { Link, NavLink } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger + close icons
import { FaBagShopping, FaHeart } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-black text-white w-full shadow-md">
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-5 items-center">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/products">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Collections</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sale</NavLink>
          </li>
          <li>
            <NavLink to="/about">New Arrivals</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        {/* Logo */}
        <div className="font-bold text-2xl text-yellow-500">
          <Link to="/">NEWfy</Link>
        </div>
      </div>

      <nav className="flex gap-4 items-center">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/contact">Men</NavLink>
          </li>
          <li>
            <NavLink to="/about">Women</NavLink>
          </li>
          <li>
            <NavLink to="/about">Kids</NavLink>
          </li>
        </ul>
        <FaHeart />
        <FaBagShopping/>
      </nav>

      {/* Right side (GitHub + Login) */}
      <div className="flex gap-3 items-center">
        <Link to="https://github.com/arribion-link" target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link to="/auth/login">
          <button className="text-black bg-white px-4 py-1 rounded-full font-bold">
            Login
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
          <NavLink to="/products" onClick={() => setIsOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <SearchBar />
        </div>
      )}
    </header>
  );
};

export default Header;
