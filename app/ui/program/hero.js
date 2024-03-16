import Image from "next/image";

import teacher from "../../../public/images/about.jpeg"

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
                className="object-cover inset-0 h-[200px] md:h-[500px] w-full"
                loading="lazy"
            />
        </div>
    )
}


export default HeroImage;
