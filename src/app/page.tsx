import Image from "next/image";
import Mainfeed from "../../components/openingfeed/page";
import Navbar from "../../components/Navbar/page";
import Aboutpage from "../../components/About/page";
import DistrictGrid from "../../components/Grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mainfeed />
      <Aboutpage />
      <h1 className="text-3xl font-bold text-center bg-yellow-50 text-green-700">
        Glimpse of Bangladesh
      </h1>
      <DistrictGrid />
    </>
  );
}
