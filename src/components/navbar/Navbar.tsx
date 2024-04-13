import "./Navbar.css";
import NavbarNavigation from "./NavbarNavigation.tsx";
import NavbarRefLinkIcons from "./NavbarRefLinkIcons.tsx";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 gap-4">
      <img src="/rubber-duck.png" alt="Rubber Duck Logo" className="w-8 h-8" />
      <ul className="flex flex-row justify-between items-center">
        <NavbarNavigation site={"home"} />
        <NavbarNavigation site={"projects"} />
        <NavbarNavigation site={"about"} />
      </ul>
      <NavbarRefLinkIcons />
    </nav>
  );
}
