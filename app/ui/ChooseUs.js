import React from "react";

const benefitsData = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/28ada2bb9e389f480f7f46f076cec7133d566e2ead901c8c493a418ee7dcc5a9?apiKey=f0c7f3edffe4460ca2a52c85cd1fec66&",
    imgAlt: "Nurturing environment illustration",
    title: "Nurturing environment",
    description: "Prioritize creating a warm, welcoming, and nurturing atmosphere where children feel secure and supported in their early learning journey."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a432830d5f3918d40aeb3243b079acb7138cd87ba6ec842cb5d817fe95ca88ec?apiKey=f0c7f3edffe4460ca2a52c85cd1fec66&",
    imgAlt: "Friendly experience illustration",
    title: "Great and friendly experience",
    description: "We believe in creating an atmosphere where every child feels valued, supported, and excited about their educational journey."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9ac7f3d68766844ecffe01cbac413c8cf450a08def10bc97a16869ce9cae098?apiKey=f0c7f3edffe4460ca2a52c85cd1fec66&",
    imgAlt: "Care giving illustration",
    title: "Care giving",
    description: "Our educators are not just teachers; they are caring mentors dedicated to the well-being and happiness of each child in our care."
  },
];

const BenefitCard = ({ imgSrc, imgAlt, title, description }) => (
  <figure className="flex flex-col grow items-center px-14 py-12 w-full text-center text-black bg-amber-400 rounded-2xl sm:px-5 sm:mt-10 sm:w-full">
    <img loading="lazy" src={imgSrc} alt={imgAlt} className="max-w-full aspect-square w-28" />
    <figcaption>
      <h3 className="mt-14 text-3xl font-bold">{title}</h3>
      <p className="self-stretch mt-5 text-2xl">{description}</p>
    </figcaption>
  </figure>
);

const BenefitsSection = () => {
  return (
    <main className="flex flex-col px-5">
      <h2 className="self-center text-6xl font-bold text-black sm:text-4xl">Why choose us</h2>
      <section className="mt-16 w-full sm:mt-10">
        <div className="flex gap-5 sm:flex-col sm:gap-0">
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