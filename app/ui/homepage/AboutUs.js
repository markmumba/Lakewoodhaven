import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg"
import image2 from "../../../public/images/KeyBenefits-759fnsydngutjy8nkrunsk5rb6cokt1e6cs6q2xfekk.png"
import Link from "next/link";
import ButtonComponent from "./button";


function AboutSection() {
    return (
        <div id="aboutus" >
            <main className="flex flex-col px-3 md:px-32 my-12">
                <header className="self-center text-6xl font-bold text-black max-md:text-4xl">
                    About us
                </header>
                <section className="md:mt-32 w-full  max-md:max-w-full">
                    <div className="flex gap-8  max-md:flex-col max-md:gap-0 max-md:">
                        <ContentCard
                            title="Nurturing Space"
                            content1="At Lakewood Havens, we are devoted to create a nurturing space where young minds blossom through the enriching principles of Montessori education. We have believes that are rooted in a culture of caregiving and having a strong emphasis on holistic child development."
                            content2=" Our mission is driven by a genuine commitment to excellence, care, and the unique development of every child who enters our doors. And our loving teachers build warm bonds with each child through care, affection, patience and respect."
                        />
                        <ImageCard imageUrl={image1} imageAlt="inside lakewood havens school" />
                    </div>
                </section>
            </main>
        </div>
    );
}

function ContentCard({ title, content1, content2 }) {
    return (
        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <section className="grow justify-center px-20 pt-24 pb-12 w-full text-sm md:text-lg text-black bg-amber-400 rounded-2xl max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
                {content1}
                <br></br>
                <br></br>
                {content2}
                <br></br>
                <Link href="/about">
                    <ButtonComponent
                        content="Find out more"
                        style="self-center mt-10 text-sm md:text-xl text-white bg-slate-900 rounded-lg px-5 py-2 max-md:mt-5" />
                </Link>
            </section>
        </article>
    );
}

function ImageCard({ imageUrl, imageAlt }) {
    return (
        <figure className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
                loading="lazy"
                src={imageUrl}
                alt={imageAlt}
                className="grow w-full   rounded-xl max-md:mt-10 max-md:max-w-full"
            />
        </figure>
    );
}

export default AboutSection;

// TODO change the image section to be a carousel
