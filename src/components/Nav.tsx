import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav>
      <div className="font-['Plus_Jakarta_Sans'] max-w-7xl mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="w-32" />
        </div>

        {/* Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="shrink-0 flex items-center gap-3">
            <button>Sign In</button>
            <button className="w-[92px] h-[39px] px-5 py-2.5 rounded-[9999px] bg-pink-600">
            Sign Up
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
