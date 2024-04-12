import {useState} from "react";

const selectedStyle = "w-full h-full cursor-pointer bg-blue-500 text-white text-center rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-blue-700"
const unselectedStyle = "w-full h-full cursor-pointer text-white text-center rounded-lg p-2 hover:bg-orange-200 hover:text-black transition-all duration-300 ease-in-out"
export default function Navbar() {
    const [selected, setSelected] = useState("home");
    return (
        <nav className="grid grid-cols-3 gap-4">
            <img src="/rubber-duck.png" alt="Rubber Duck Logo" className="w-8 h-8"/>
            <ul className="flex flex-row justify-between items-center">
                <li className={selected === "home" ? selectedStyle : unselectedStyle} onClick={() => setSelected("home")}>Home</li>
                <li className={selected === "about" ? selectedStyle : unselectedStyle} onClick={() => setSelected("about")}>About</li>
                <li className={selected === "contact" ? selectedStyle : unselectedStyle} onClick={() => setSelected("contact")}>Contact</li>
            </ul>
            <ul className="flex justify-end">
                <li>
                    <a href="https://www.linkedin.com/in/cong-minh-vu-199417213/" target="_blank" rel="noreferrer">
                        <img src="/linkedin-icon.svg" alt="LinkedIn Logo" className="w-8 h-8"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/VitahuHere" target="_blank" rel="noreferrer">
                        <img src="/github-mark-white.svg" alt="Github Logo" className="w-8 h-8"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}