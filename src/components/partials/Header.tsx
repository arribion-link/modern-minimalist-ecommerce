import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHeart, FaBagShopping, FaGithub } from "react-icons/fa6";
import SearchBar from "../ui/SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Nav – Desktop only */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }>
              SHOP
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }>
              COLLECTIONS
            </NavLink>
            <NavLink
              to="/sale"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }>
              SALE
            </NavLink>
            <NavLink
              to="/new-arrivals"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }>
              NEW ARRIVALS
            </NavLink>
          </nav>

          {/* Right Side – Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-8">
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }>
                MEN
              </NavLink>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }>
                WOMEN
              </NavLink>
              <NavLink
                to="/kids"
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }>
                KIDS
              </NavLink>
            </nav>

            <div className="flex items-center gap-5">
              <Link
                to="/wishlist"
                className="hover:text-yellow-400 transition-colors"
                title="Wishlist">
                <FaHeart size={20} />
              </Link>
              <Link
                to="/cart"
                className="hover:text-yellow-400 transition-colors relative"
                title="Cart">
                <FaBagShopping size={20} />
                {/* <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full px-1.5 min-w-[18px] h-4 flex items-center justify-center">3</span> */}
              </Link>
            </div>

            <Link
              to="https://github.com/arribion-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
              title="GitHub">
              <FaGithub size={22} />
            </Link>

            <Link to="/auth/login">
              <button className="bg-white text-black px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-5">
            <NavLink
              to="/products"
              className="text-lg font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}>
              Shop
            </NavLink>
            <NavLink
              to="/collections"
              className="text-lg font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}>
              Collections
            </NavLink>
            <NavLink
              to="/sale"
              className="text-lg font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}>
              Sale
            </NavLink>
            <NavLink
              to="/new-arrivals"
              className="text-lg font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}>
              New Arrivals
            </NavLink>

            <div className="border-t border-gray-800 pt-5 mt-2">
              <NavLink
                to="/men"
                className="block text-lg font-medium hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Men
              </NavLink>
              <NavLink
                to="/women"
                className="block text-lg font-medium hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Women
              </NavLink>
              <NavLink
                to="/kids"
                className="block text-lg font-medium hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Kids
              </NavLink>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link
                to="/wishlist"
                className="hover:text-yellow-400"
                onClick={() => setIsOpen(false)}>
                <FaHeart size={24} />
              </Link>
              <Link
                to="/cart"
                className="hover:text-yellow-400"
                onClick={() => setIsOpen(false)}>
                <FaBagShopping size={24} />
              </Link>
              <Link
                to="https://github.com/arribion-link"
                target="_blank"
                className="hover:text-yellow-400">
                <FaGithub size={24} />
              </Link>
            </div>

            <div className="pt-4">
              <SearchBar />
            </div>

            <Link
              to="/auth/login"
              className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
