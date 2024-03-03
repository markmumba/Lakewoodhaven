import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import React from 'react';

const NavigationItem = ({ children }) => (

  <div className="grow text-center  rounded-lg hover:bg-slate-900 hover:text-white  text-lg">
    <Link href={children}>
      {children}
    </Link>
  </div>
);

const NavigationBar = () => {
  const navigationItems = ["Home", "About us", "program", "Blogs", "Contact us"];

  return (
    <nav className="flex justify-center items-center px-10 py-4 mt-3 w-full bg-amber-400 sm:px-5 sm:max-w-full">
      <div className="flex gap-2 justify-between max-w-full w-[630px] sm:flex-wrap">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index}>{item}</NavigationItem>
        ))}
      </div>
    </nav>
  );
};

const HeaderSection = () => {
  return (
    <header className="flex flex-col text-2xl text-black">
      <Image
        src={logo}
        alt="Decorative"
        className="self-center max-w-full aspect-[0.99] w-[100px]"
      />
      <NavigationBar />
    </header>
  );
};

export default HeaderSection;

