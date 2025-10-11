import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const Menu = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Experience", link: "/experience" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "AiChatbot", link: "/aichatbot" },
    // { id: 6, name: "Snack", link: "/snack-page" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); // clear the input
      setMobileMenuOpen(false); // close mobile menu if open
    }
  };


  return (
    <div className="shadow-md bg-white dark:bg-gray-900 text-black relative z-40">
      {/* upper Navbar */}
      <div className="bg-grey-400 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl flex gap-2 bg-grey-900  ">
            THUONG NGUYEN 
          </Link>
     

          {/* Search bar - desktop */}
          {/* <form
            onSubmit={handleSearchSubmit}
            className="relative flex-1 mx-4 max-w-md hidden sm:block"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
            </button>
          </form> */}

          {/* Cart + Menu toggle */}
          <div className="flex items-center gap-4">
            {/* <Link
              to="/"
              className="bg-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              <span className="hidden sm:inline">Cart</span>
              <FaShoppingCart className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </Link> */}

            {/* Hamburger menu for mobile */}
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu items (desktop) */}
      <div className="hidden sm:flex justify-center bg-white">
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="text-xl px-3 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-2">
          {/* Search bar mobile */}
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
            </button>
          </form>

          {/* Mobile links */}
          <ul className="flex flex-col gap-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="block px-2 py-1">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Navbar;