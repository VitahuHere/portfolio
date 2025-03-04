import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { setCurrentSite } from "../../redux/navbarSlice.ts";


export default function SidebarItem({ site }: { site: string }) {
  const currentSite = useAppSelector((state) => state.currentSite.value);
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full h-full">
      <li
        className="flex w-full h-full cursor-pointer justify-center items-center text-2xl"
        onClick={() => dispatch(setCurrentSite(site))}
      >
        {site.charAt(0).toUpperCase() + site.slice(1)}
      </li>
      {currentSite === site && (
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 animate-underline"></div>
      )}
    </div>
  );
}