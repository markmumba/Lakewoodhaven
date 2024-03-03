import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderSection from "./ui/homepage/navigation";
import Hero from "./ui/homepage/Hero";
import AboutSection from "./ui/homepage/AboutUs";
import EducationPrograms from "./ui/homepage/program";
import BenefitsSection from "./ui/homepage/ChooseUs";
import ContactForm from "./ui/homepage/Maps";
import Contact from "./ui/homepage/Footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <Hero />
      <AboutSection />
      <EducationPrograms />
      <BenefitsSection />
      <ContactForm />
      <Contact />
    </>
  );

}
