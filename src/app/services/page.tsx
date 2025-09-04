import HeroSection from "../../../components/Services/HeroSection";
import ServicesSection from "../../../components/Services/ServicesSection";
// import DetailedServices from "../../../components/Services/DetailedServices";
import ProjectsSection from "../../../components/Services/ProjectsSection";
import BrandsSection from "../../../components/Services/BrandsSection";
import Testimonials from "../../../components/Services/Testimonials";
import ContactForm from "../../../components/Services/SocialReviews";

export default function ServicesPage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      {/* <DetailedServices /> */}
      <ProjectsSection />
      <BrandsSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
