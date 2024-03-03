import Contact from "../ui/homepage/Footer"
import HeaderSection from "../ui/homepage/navigation"

export default function Layout({ children }) {
    return (
        <div className="flex  flex-col h-screen max-md:overflow-hidden">
            <div className="w-full ">
                <HeaderSection />
            </div>
            <div className="flex-grow ">{children}</div>
            <Contact />
        </div>

    )
}