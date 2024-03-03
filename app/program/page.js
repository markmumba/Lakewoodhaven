import ProgramsContent from "../ui/program/content";
import FAQSection from "../ui/program/faqs";
import HeroImage from "../ui/program/hero";



function Programs() {

    return (
        <div className="overflow-hidden">
            <HeroImage />
            <ProgramsContent />
            <FAQSection />
        </div>
    )

}


export default Programs;