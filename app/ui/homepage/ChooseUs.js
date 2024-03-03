import Image from "next/image";
import React from "react";

const benefitsData = [
  {
    imgSrc: "/images/human-resources.png",
    imgAlt: "Nurturing environment illustration",
    title: "Nurturing environment",
    description: "Prioritize creating a warm, welcoming, and nurturing atmosphere where children feel secure and supported in their early learning journey."
  },
  {
    imgSrc: "/images/hands.png",
    imgAlt: "Friendly experience illustration",
    title: "Great and friendly experience",
    description: "We believe in creating an atmosphere where every child feels valued, supported, and excited about their educational journey."
  },
  {
    imgSrc: "/images/human-resources.png",
    imgAlt: "Care giving illustration",
    title: "Care giving",
    description: "Our educators are not just teachers; they are caring mentors dedicated to the well-being and happiness of each child in our care."
  },
];

function BenefitCard({ imgSrc, imgAlt, title, description }) {
  return (
    <figure className="flex flex-col grow items-center md:px-14 py-12 w-full text-center text-black bg-amber-400 rounded-2xl  sm:mt-10 sm:w-full">
      <Image loading="lazy" src={imgSrc} alt={imgAlt} className="max-w-full aspect-square w-28"
        width={300}
        height={300} />
      <figcaption>
        <h3 className="mt-14 text-2xl font-bold">{title}</h3>
        <p className="self-stretch mt-5 text-xl">{description}</p>
      </figcaption>
    </figure>
  )
}

function  BenefitsSection  ()  {
  return (
    <main className="flex flex-col px-5 py-40">
      <h2 className="self-center text-6xl  font-bold text-black max-md:text-2xl">Why choose us</h2>
      <section className="mt-16 w-full sm:mt-10">
        <div className="flex max-md:flex-col md:space-x-8 sm:gap-0">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col w-1/3 sm:w-full">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BenefitsSection;