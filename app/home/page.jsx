import Banner from "@/app/components/Banner/Banner";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Header />
      <Banner />
      <Info />
      <About />
      <Gallery />
      <Map />
      <Footer />
    </main>
  );
}
