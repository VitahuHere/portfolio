import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { setCurrentSite } from "../../redux/navbarSlice.ts";

const common =
  "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600";

export default function NavbarNavigation({ site }: { site: string }) {
  const currentSite = useAppSelector((state) => state.currentSite.value);
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full h-full">
      <li
        className="flex w-full h-full cursor-pointer justify-center items-center transition-transform transform hover:scale-110"
        onClick={() => dispatch(setCurrentSite(site))}
      >
        {site.charAt(0).toUpperCase() + site.slice(1)}
      </li>
      {currentSite === site && (
        <div className={common + " animate-underline"}></div>
      )}
      {currentSite !== site && (
        <div className={common + " animate-underline-reverse"}></div>
      )}
    </div>
  );
}
