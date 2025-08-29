import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "components/WhoWeAre";
import Guidance from "@/components/Guidance";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Guidance />
      <Services />
      <WhyChooseUs />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
}
