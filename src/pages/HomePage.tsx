import Personal from "../components/Personal.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import {isMobile} from 'react-device-detect';
import Sidebar from "../components/sidebar/Sidebar.tsx";

function getDeviceScreenNavigation(){
  if(isMobile){
    return <Sidebar />
  }
  return <Navbar />
}

export default function HomePage() {
  return (
    <>
      {getDeviceScreenNavigation()}
      <Personal />
    </>
  );
}
