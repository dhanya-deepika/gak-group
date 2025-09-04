import HeroSection from "../../components/Home/Hero";
import WhoWeAre from "../../components/Home/WhoWeAre";
import Stats from "../../components/Home/Stats";
import Guidence from "../../components/Home/Guidence";
import Services from "../../components/Home/Services";
import ClientLogos from "../../components/Home/ClientLogos";
import WhyChooseUs from "../../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <Stats />
      <Guidence/>
      <Services/> 
      <WhyChooseUs />
      <ClientLogos/>
    </div>
  );
}
