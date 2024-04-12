import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [selected, setSelected] = useState("home");
  return (
    <nav className="grid grid-cols-3 gap-4">
      <img src="/rubber-duck.png" alt="Rubber Duck Logo" className="w-8 h-8" />
      <ul className="flex flex-row justify-between items-center">
        <div className="relative">
          <li
            className="flex w-full h-full cursor-pointer justify-center items-center"
            onClick={() => setSelected("home")}
          >
            Home
          </li>
          {selected === "home" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline"></div>
          )}
          {selected !== "home" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline-reverse"></div>
          )}
        </div>
        <div className="relative">
          <li
            className="flex w-full h-full cursor-pointer justify-center items-center"
            onClick={() => setSelected("projects")}
          >
            Projects
          </li>
          {selected === "projects" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline"></div>
          )}
          {selected !== "projects" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline-reverse"></div>
          )}
        </div>
        <div className="relative">
          <li
            className="flex w-full h-full cursor-pointer justify-center items-center"
            onClick={() => setSelected("contact")}
          >
            Contact
          </li>
          {selected === "contact" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline"></div>
          )}
          {selected !== "contact" && (
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline-reverse"></div>
          )}
        </div>
      </ul>
      <ul className="flex justify-end space-x-2">
        <li className="w-8 h-8">
          <a
            href="https://www.linkedin.com/in/cong-minh-vu-199417213/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin-icon.svg" alt="LinkedIn Logo" />
          </a>
        </li>
        <li className="w-8 h-8">
          <a
            href="https://github.com/VitahuHere"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-mark-white.svg" alt="Github Logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
