import Image from "next/image";

import teacher from "../../../public/images/UPT3C5L6GYYUC3RXDGRWA45PFQ.jpg"

function HeroImage() {
    return (
        <div className="w-full ">
            <TopImage />
        </div>
    )
}

function TopImage() {
    return (
        <div className="w-full">
            <Image src={teacher}
                alt="Montessori themed background"
                className="object-cover inset-0 h-[500px]"
                loading="lazy"
            />
        </div>
    )
}


export default HeroImage;
