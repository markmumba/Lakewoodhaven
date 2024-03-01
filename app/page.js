import Image from "next/image";
import HeaderSection from "./ui/navigation";
import Hero from "./ui/Hero";
import AboutSection from "./ui/AboutUs";
import EducationPrograms from "./ui/program";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <Hero />
      <AboutSection />
      <EducationPrograms />
    </>
  );

}
