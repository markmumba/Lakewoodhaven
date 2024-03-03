

import Image from "next/image";
import Link from "next/link";
import React from "react";

const programData = [
    {
        id: 1,
        title: "Kindegarten 1",
        description:
            "Focus is on social interaction, creative play, and early learning experiences in a supportive and stimulating environment.",
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
            "Including activities to promote their physical, cognitive, and social development.",
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc: "/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg",
        altText: "Nursery for children"
    },
    {
        id: 3,
        title: "Reception class",
        description:
            "Providing young children with foundational skills and experiences to prepare them for the academic and social expectations.",
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc:
            '/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg',
        altText: "Junior Kg Classroom"
    },
    {
        id: 4,
        title: "Day Care",
        description:
            'Offers supervision, care, and educational activities for children during the day.',
        ageGroup: "4-5yrs",
        frequency: "5 days weekly",
        duration: "2hr periods",
        imgSrc:
            '/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg',
        altText: "Children in a Day Care"
    },
];

function ProgramCard({ title, description, ageGroup, frequency, duration, imgSrc, altText }) {
    return (
        <section className="flex flex-col grow px-9 py-8 mt-10  text-black bg-amber-400 rounded-3xl ">
            <Image src={imgSrc} alt={altText} width={400} height={400} className="aspect-[1.5] w-full  object-center rounded-3xl max-md:max-w-full" />
            <h3 className=" mt-10 ml-3.5 text-2xl font-bold">{title}</h3>
            <p className="mt-3.5 ml-3.5 text-lg ">{description}</p>
            <div className="flex gap-5 justify-between self-center px-8 py-3.5 mt-11 max-w-full text-lg text-white rounded-3xl bg-slate-900 w-[486px]">
                <div className="flex gap-5 justify-between items-center flex-wrap">
                    <div className="self-stretch my-auto">{ageGroup}</div>
                    <div className="self-stretch w-px bg-white h-[74px]" />
                    <div className="self-stretch my-auto">{frequency}</div>
                    <div className="w-px bg-white h-[74px]" />
                    <div className="my-auto">{duration}</div>
                </div>
            </div>
        </section>
    );
}

function ProgramsContent() {
    return (
        <main className="flex flex-col md:px-72 mt-20">
            <header className="self-start text-6xl font-bold text-black max-md:text-2xl">Programs</header>
            <div className="md:grid md:grid-cols-2 md:gap-32 flex flex-col p-2 ">
                {programData.map((program) => (
                    <React.Fragment key={program.id}>
                        <ProgramCard {...program} />
                    </React.Fragment>
                ))}
            </div>
            <div className="text-center">
                <Link href="/enroll">
                    <button className="px-8 py-4 bg-green-700 mt-20 w-1/3  text-white text-xl rounded-3xl ">Our Enrollment process </button>
                </Link>
            </div>
        </main>
    );
}

export default ProgramsContent;