import { useState } from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="mb-16">
      <button onClick={handleClick} className="fixed top-4 left-6 z-50 transition-opacity duration-500 ease-in-out">
        {isClicked ? (
          <img src="/cancel.svg" alt="Cancel Icon" className="h-8 w-8" />
        ) : (
          <img src="/menu-bar.svg" alt="Menu Icon" className="h-8 w-8" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-amber-50 z-40 transition-transform duration-300 ease-in-out ${
          isClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-16">
          <ul className="space-y-10">
            <SidebarItem site="home" />
            <SidebarItem site="projects" />
            <SidebarItem site="about" />
          </ul>
        </div>
      </div>

      {isClicked && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
}