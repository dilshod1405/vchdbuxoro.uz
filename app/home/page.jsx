import Banner from "@/app/components/Banner/Banner";
import Header from "../components/Header/Header";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Header />
      <Banner />
    </main>
  );
}
