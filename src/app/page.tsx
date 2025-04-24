import HeroSection from "./components/HeroSection";
import Offerings from "./components/Offerings";
import Footer from "./components/Footer";
import MaintenancePage from "./components/MaintenancePage";
import LogoSlider from "./components/LogoSlider";
import GlobalPresence from "./components/GlobalPresenceMap";


export default function Home() {
  return (
    <main>
      {/* <MaintenancePage /> */}
      <HeroSection />
      <LogoSlider />
      <Offerings />
      <GlobalPresence />

    </main>
  );
}
