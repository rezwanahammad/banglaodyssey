import Image from "next/image";
import Mainfeed from "../../components/openingfeed/page";
import Navbar from "../../components/Navbar/page";
import Aboutpage from "../../components/About/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mainfeed />
      <Aboutpage />
    </>
  );
}
