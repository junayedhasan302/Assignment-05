import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl h-[50px] mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <div className="shrink-0"><img src={logo} alt="Dev Stack" className="w-[126px]" /></div>

        {/* Menu */}
        <div className="flex-1 flex justify-center  ">
          <ul className="flex items-center gap-7 text-slate-600 text-xl font-bold">
            <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">Home</li>
            <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">Technologies</li>
            <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">Projects</li>
            <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">About</li>
            <li className="cursor-pointer hover:text-pink-600 transition-colors duration-200">Contact</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="shrink-0 flex items-center gap-4 font-bold">
          <button className="text-sm text-slate-700 text-xl font-bold">Sign In</button>

          <button
            className="
              w-[100px]
              h-[40px]
              rounded-full
              bg-pink-600
              text-white
              font-semibold
              transition-colors
              duration-200
              hover:bg-pink-700
              text-xl font-bold
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
