import Image from "next/image";

import teacher from "../../../public/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg"

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
                className="object-cover inset-0 h-[200px] md:h-[500px]"
                loading="lazy"
            />
        </div>
    )
}


export default HeroImage;
