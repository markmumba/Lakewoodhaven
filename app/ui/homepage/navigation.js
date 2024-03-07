'use client';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";


function NavigationBar() {
  return (
    <nav className="flex  justify-center items-center px-2 md:px-10 py-4 mt-3 w-full bg-amber-400 sm:px-5 sm:max-w-full">
      <div className="flex  flex-wrap  gap-2 md:justify-between max-w-full w-[630px] sm:flex-wrap font-semibold">
        <div className="grow text-center  rounded-lg hover:bg-slate-900  hover:text-white text-xl">
          <Link href="/">
            Home
          </Link>
        </div>

        <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
          <Link href="#aboutus">
            About Us
          </Link>
        </div>

        <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
          <Link href="/program">
            Program
          </Link>
        </div>

        <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
          <Link href="/blog">
            Blog
          </Link>
        </div>

        <div className="grow text-center rounded-lg hover:bg-slate-900 hover:text-white text-lg">
          <Link href="#contactus">
            Contact Us
          </Link>
        </div>
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

