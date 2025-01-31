import Image from "next/image";
import Hero from "./components/Hero";
import Heromob from "./components/Heromob";
import Mobileswiper from "./components/SwiperComponent";
import SwiperComponent from "./components/SwiperComponent";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-sm:flex max-sm:flex-col max-sm:items-center">
      <Profile />
      <Hero />
      <Heromob />
      <Footer />
    </main>
  );
}
