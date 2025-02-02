import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "./modal";
import { MealCardProps } from "../types/Memal";

interface NavbarProps {
  selectedMeals?: MealCardProps[];
}

const Navbar: React.FC<NavbarProps> = ({ selectedMeals = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => {
    if (selectedMeals.length > 0) {
      setIsModalOpen(true);
    } else {
      alert("No meals selected!");
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const location = useLocation();
  const isAddToWeekEnabled = ["/"].includes(location.pathname);
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold py-2 border-b-4 border-blue-700"
              : "text-gray-800 hover:text-blue-600 py-2"
          }
        >
          All Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/week1"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold py-2 border-b-4 border-blue-700"
              : "text-gray-800 hover:text-blue-600 py-2"
          }
        >
          Week 1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/week2"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold py-2 border-b-4 border-blue-700"
              : "text-gray-800 hover:text-blue-600 py-2"
          }
        >
          Week 2
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/week3"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold py-2 border-b-4 border-blue-700"
              : "text-gray-800 hover:text-blue-600 py-2"
          }
        >
          Week 3
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/week4"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold py-2 border-b-4 border-blue-700"
              : "text-gray-800 hover:text-blue-600 py-2"
          }
        >
          Week 4
        </NavLink>
      </li>
      <li>
        <button
          onClick={openModal}
          disabled={!isAddToWeekEnabled || selectedMeals.length === 0}
          className={`py-2 px-4 rounded-full ${
            isAddToWeekEnabled && selectedMeals.length > 0
              ? "bg-blue-700 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Add to Week
        </button>
      </li>
    </>
  );

  return (
    <header>
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <ul className="hidden md:flex space-x-12">{navItems}</ul>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">{navItems}</ul>
        )}
      </nav>
      {isModalOpen && <Modal onClose={closeModal} selectedMeals={selectedMeals} />}
    </header>
  );
};

export default Navbar;
