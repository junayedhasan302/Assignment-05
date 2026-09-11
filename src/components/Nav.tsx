import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  bg-white border-b border-slate-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="h-16 lg:h-[72px] flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-0.5 bg-slate-600"></span>
            <span className="w-5 h-0.5 bg-slate-600"></span>
            <span className="w-5 h-0.5 bg-slate-600"></span>
          </button>

          {/* Logo */}
          <div className="shrink-0 lg:mr-8">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-[100px] sm:w-[110px] lg:w-[126px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-semibold text-slate-600">
              <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">
                Home
              </li>

              <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">
                Technologies
              </li>

              <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">
                Projects
              </li>

              <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">
                About
              </li>

              <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">
                Contact
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="shrink-0 flex items-center gap-3">
            <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors">
              Sign In
            </button>

            <button
              className="
                px-4 sm:px-5
                py-2
                rounded-full
                bg-pink-600
                text-white
                text-xs sm:text-sm
                font-semibold
                hover:bg-pink-700
                transition-colors duration-200
              "
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <ul className="flex flex-col gap-4 text-sm font-semibold text-slate-600">
              <li className="cursor-pointer hover:text-pink-600">Home</li>
              <li className="cursor-pointer hover:text-pink-600">Technologies</li>
              <li className="cursor-pointer hover:text-pink-600">Projects</li>
              <li className="cursor-pointer hover:text-pink-600">About</li>
              <li className="cursor-pointer hover:text-pink-600">Contact</li>
              <li className="sm:hidden cursor-pointer text-pink-600">
                Sign In
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
