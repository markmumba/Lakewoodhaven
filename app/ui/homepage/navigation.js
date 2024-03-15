'use client';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";


function NavigationBar() {
  return (
    <nav className="flex  justify-center items-center px-4 md:px-10 py-4 mt-3 w-full bg-amber-400 sm:px-5 sm:max-w-full">
      <div className="flex  flex-wrap  gap-2 md:justify-between max-w-full w-[630px] sm:flex-wrap font-semibold">
        <Link href="/">
          <div className="grow text-center  rounded-lg hover:bg-slate-900  hover:text-white text-xl">
            Home
          </div>
        </Link>

        <Link href="/about">
          <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
            About Us
          </div>
        </Link>

        <Link href="/program">
          <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
            Program
          </div>
        </Link>

        <Link href="/blog">
          <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
            Blog
          </div>
        </Link>

        <Link href="#contactus">
          <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
            Contact Us
          </div>
        </Link>
      </div>
    </nav>
  );
}


function HeaderSection() {
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

