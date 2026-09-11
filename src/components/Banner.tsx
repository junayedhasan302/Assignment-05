import React from "react";
import BannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between

          gap-8
          sm:gap-10
          lg:gap-16

          py-12
          sm:py-16
          lg:py-20
          xl:py-24
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            w-full
            lg:w-1/2

            text-center
            lg:text-left

            flex
            flex-col
            items-center
            lg:items-start
          "
        >
          {/* Heading */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-5xl
              xl:text-6xl

              font-bold
              leading-tight

              text-slate-900
            "
          >
            Build Your Ideal
            <br />
            <span
              className="
                bg-gradient-to-r
                from-orange-500
                via-pink-500
                to-purple-600

                bg-clip-text
                text-transparent">Development Stack </span> </h1>

          {/* Description */}
          <p className="
              mt-5
              sm:mt-6
              max-w-[600px]
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              sm:leading-8
              text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project. </p>

     {/* Buttons */}
     <div className="mt-7 sm:mt-8 flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Explore Technologies */}
      <button className="
      flex-1
      sm:flex-none
      px-3
      sm:px-6
      py-3
      rounded-lg
      bg-gradient-to-r
      from-orange-500
      via-pink-500
      to-purple-600
      text-white
      text-xs
      sm:text-base
      font-medium
      shadow-md
      hover:shadow-lg
      hover:scale-101
      transition-all
      duration-200">Explore Technologies</button>

            {/* Learn More */}
      <button className="
      flex-1
      sm:flex-none
      px-3
      sm:px-6
      py-3
      rounded-lg
      border
      border-slate-200
      text-slate-800
      text-xs
      sm:text-base
      font-medium
      hover:bg-slate-100
      hover:border-slate-300
      transition-all
      cursor-pointer
      duration-200"> Learn More </button>
        </div>
    </div>


        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            w-full
            lg:w-1/2
            flex
            justify-center
          "
        >

          <img
            src={BannerImage}
            alt="Development Stack"
            className="
              w-[280px]
              sm:w-[340px]
              md:w-[390px]
              lg:w-[400px]
              xl:w-[460px]
              h-auto
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
