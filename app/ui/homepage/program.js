import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/image-9.jpeg"
import image2 from "../../../public/images/raisehand.jpg"
import Link from "next/link";
import ButtonComponent from "./button";


function EducationPrograms() {
    return (
        <main className="flex flex-col px-3 lg:px-32 my-12 bg-gradient-to-tr from-slate-900  to-slate-700">
            <section className="lg:mt-32 w-full ">
                <div className="flex md:gap-4 lg:gap-8 static  pb-10 max-md:flex-col max-md:gap-0 max-md:">

                    <ImageCard imageUrl={image2} imageAlt="inside lakewood havens school" style="grow  hidden w-[40%] h-[25%] lg:w-[30%] md:mt-28 lg:mt-0 absolute lg:h-[60%] object-cover rounded-full md:block " />
                    <ContentCard />
                </div>
                <ImageCard imageUrl={image1} imageAlt="inside lakewood havens school" style="grow w-[10%] hidden lg:block absolute h-[20%] object-cover left-[27%] rounded-full " />
            </section>
        </main>
    );
}

function ContentCard({ title, content1, content2 }) {
    return (
        <article className="flex flex-col lg:w-6/12 max-md:ml-0 max-lg:w-full ">
            <section className="grow justify-center text-center lg:px-20 pt-24 pb-12 w-full md:text-xl  text-white rounded-2xl max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
                <h1 className="font-bold text-3xl ">Programs</h1>
                <div className="grid grid-cols-2 gap-10 ">
                    <div className="border-b-4 p-4 ">Daycare</div>
                    <div className="border-b-4 p-4">Reception class</div>
                    <div className="border-b-4 p-4">Kindergarten 1</div>
                    <div className="border-b-4 p-4">Kindergarten 2</div>

                </div>
                <Link href="/program">
                    <ButtonComponent 
                    content="Learn more"
                    style="self-center mt-14 text-sm md:text-xl text-white bg-amber-400 rounded-lg px-6 py-3 max-md:mt-5 hover:bg-amber-600"/>
                </Link>
            </section>
        </article>
    );
}

function ImageCard({ imageUrl, imageAlt, style }) {
    return (
        <figure className="flex flex-col lg:ml-5 md:w-full  lg:w-6/12 max-md:ml-0 ">
            <Image
                loading="lazy"
                src={imageUrl}
                alt={imageAlt}
                className={style}
            />
        </figure>
    );
}

export default EducationPrograms;
