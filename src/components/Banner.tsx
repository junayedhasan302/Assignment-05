import React from "react";
import BannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <section  className="flex max-w-7xl  mx-auto px-6 flex items-center gap-20">
        {/* Left */}
      <div>
        <div>

            <h1 className="text-6xl font-bold">
                Build Your Ideal <br />
                <span className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent ">
                Development Stack
            </span>
            </h1>
            <br />
            
          

          <p>
            Explore frontend, backend, database, and tooling options,<br />compare
            them side by side, and put together the stack that fits your<br />next
            project.
          </p>

          <div>
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-xl">Explore Technologies</button>
            <button className="text-xl">Learn More</button>
          </div>
        </div>
      </div>
      {/* Right  */}
      <div>
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </section>
  );
};

export default Banner;
