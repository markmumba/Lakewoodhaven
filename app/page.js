import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderSection from "./ui/navigation";
import Hero from "./ui/Hero";
import AboutSection from "./ui/AboutUs";
import EducationPrograms from "./ui/program";
import BenefitsSection from "./ui/ChooseUs";
import ContactForm from "./ui/Maps";
import Contact from "./ui/Footer";

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
