import "./Navbar.css";
import NavbarNavigation from "./NavbarNavigation.tsx";
import NavbarRefLinkIcons from "./NavbarRefLinkIcons.tsx";

export default function Navbar() {
  return (
    <nav className="grid grid-flow-col auto-cols-auto">
      <img src="/rubber-duck.png" alt="Rubber Duck Logo" className="h-8" />
      <ul className="flex flex-row space-x-4 items-center">
        <NavbarNavigation site={"home"} />
        <NavbarNavigation site={"projects"} />
        <NavbarNavigation site={"about"} />
      </ul>
      <NavbarRefLinkIcons />
    </nav>
  );
}
