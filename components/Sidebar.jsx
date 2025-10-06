"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { name: "Home", icon: faHome, index: 1, color: "bg-red-900" },
  { name: "About", icon: faUser, index: 2, color: "bg-red-900" },
  { name: "Projects", icon: faFolderOpen, index: 3, color: "bg-red-900" },
  { name: "Contact", icon: faComments, index: 4, color: "bg-red-900" },
];

const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMoveToSection = (index) => {
    fullpage_api.moveTo(index);
  };

  return (
    <div className="hidden md:flex fixed z-40 bg-gray-800 h-[50vh] w-16 flex-col justify-evenly items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul className="flex flex-col justify-evenly items-center h-full text-gray-50 space-y-4">
        {sections.map((section, index) => (
          <li key={index} className="relative group flex items-center">
            {/* Icon Button */}
            <button
              onClick={() => handleMoveToSection(section.index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                hoveredIndex === index ? section.color : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={section.icon}
                className="text-xl text-white"
              />
            </button>

            {/* Tooltip - Centered with the icon, aligned right */}
            {hoveredIndex === index && (
              <div
                className={`absolute left-20 top-1/2 -translate-y-1/2 px-3 py-1 text-sm rounded-md shadow-lg text-white ${section.color}`}
              >
                {section.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
