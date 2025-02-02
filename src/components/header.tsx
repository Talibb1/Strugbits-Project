import React from "react";

const Header: React.FC = () => (
  <header
    className="text-center py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url(/Pizza-3007395.jpg)" }}
  >
    <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>
    <div className="relative z-10 text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold">
        Optimized Your Meal
      </h1>
      <p className="text-lg md:text-xl mt-2">
        Select meals to add in week. You will be able to edit and modify meal
        weeks.
      </p>
    </div>
  </header>
);

export default Header;
