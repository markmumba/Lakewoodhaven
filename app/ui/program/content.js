

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonComponent from "../homepage/button";

const programData = [
    {
        id: 1,
        title: "Kindegarten 1",
        description:
            "This refers specifically to the first year of kindergarten, usually for children around 4 years old. They learn basic skills like number work, language,reading handwriting general knowledge and Montessori activities, and interact with their peers in a structured play-based environment.",
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc: "/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg",
        altText: "Children playing in Play Group"
    },
    {
        id: 2,
        title: "Kindergarten 2",
        description:
            "This signifies the second year of kindergarten, for children around 5 years old. KG2 builds  number work, language,reading handwriting general knowledge and Montessori activities and ultimately transitioning to primary school.",
        ageGroup: "5-6yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc: "/images/image-9.jpeg",
        altText: "Nursery for children"
    },
    {
        id: 3,
        title: "Reception class",
        description:
            "it caters to children between 4 and 5 years old before entering primary school. Reception class focuses on introducing basic literacy and numeracy skills alongside social development, preparing them for formal education within a primary school setting.",
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc:
            '/images/images.jpeg',
        altText: "Junior Kg Classroom"
    },
    {
        id: 4,
        title: "Day Care",
        description:
            "It provides childcare and supervision in a safe and stimulating environment. While daycare might include basic learning activities, its not a formal educational program like kindergarten. Daycare programs can be full-day or part-time, focusing on playtime, socialization, and basic care for younger children.",
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc:
            '/images/100616_CIF-194-scaled.jpg',
        altText: "Children in a Day Care"
    },
];

function ProgramCard({ title, description, ageGroup, frequency, duration, imgSrc, altText }) {
    return (
        <section className="flex flex-col px-4 py-8 mt-10 text-black bg-amber-400 rounded-3xl 2xl:w-4/6 ">
            <div className="flex-shrink-0">
                <Image src={imgSrc} alt={altText} width={300} height={300} className=" w-full object-cover  rounded-3xl " />
                <h3 className="mt-10 ml-3.5 text-2xl font-bold">{title}</h3>
                <p className="mt-3.5 ml-3.5 text-base 2xl:text-lg  ">{description}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap  w-fit justify-center items-center  px-10 py-1 mt-11  text-sm md:text-base 2xl:text-lg text-white rounded-3xl bg-slate-900 ">
                    <div className="flex gap-1.5 xl:gap-5 ">
                        <div className="my-auto">{ageGroup}</div>
                        <div className="w-px bg-white h-[60px]" />
                        <div className="my-auto">{frequency}</div>
                        <div className="w-px bg-white h-[60px]" />
                        <div className="my-auto">{duration}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProgramsContent() {
    return (
        <main className="flex flex-col  md:px-2   mt-6 md:mt-20 ">
            <header className=" text-6xl font-bold text-black max-md:text-4xl text-center">Programs</header>
            <div className="flex 2xl:px-20 px-6 ">
                <div className="md:grid md:grid-cols-2 md:gap-10  flex flex-col">
                    {programData.map((program) => (
                        <React.Fragment key={program.id}>
                            <ProgramCard {...program} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <Link href="/enroll">
                    <ButtonComponent
                        content="Our Enrollment process"
                        style="px-8 py-4 bg-green-700 mt-20 md:w-1/3  text-white text-xl rounded-xl"
                    />
                </Link>
            </div>
        </main>
    );
}

export default ProgramsContent;