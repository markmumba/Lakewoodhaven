import Image from "next/image";
import logo from "../../../public/images/logo.png"
import Link from "next/link";

function Contact() {

    return (
        <div id="contactus" className=" bg-slate-900 text-white mt-20">
            <div className="bg-white rounded-full w-full"></div>
            <div className=" grid gap-5 px-10 md:flex md:p-20  justify-between  ">

                <div className=" pl-20 md:py-20 md:px-10">
                    <Image src={logo} width={120} />
                    <p className="text-sm md:text-base font-medium">The Angels Paradise <br />TheMontessori Home</p>
                    <div className="flex  gap-6 pt-3  md:text-base">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>

                <div className="md:pl-[30%] md:py-24">
                    <div className="grid grid-cols-2 md:grid-cols-3">
                        <div className=" ">
                            <h3 className="pl-3 text-xl md:text-3xl font-medium">Quick Links</h3>
                            <ul className="">
                                <li className="text-sm p-2 md:text-lg">Admission Process</li>
                                <Link href="/blog"><li className="text-sm p-2 md:text-lg">Articles</li></Link>
                                <li className="text-sm p-2 md:text-lg">Parent Handbook</li>
                            </ul>
                        </div>
                        <div className="">
                            <Link href="/program">
                            <h3 className="pl-3 text-xl md:text-3xl  font-medium" >Programs</h3>
                            <ul>
                                <li className="text-sm p-2 md:text-lg">Day Care</li>
                                <li className="text-sm p-2 md:text-lg">Reception class</li>
                                <li className="text-sm p-2 md:text-lg">Kindergarten 1</li>
                                <li className="text-sm p-2 md:text-lg">Kindergarten 2</li>
                            </ul>
                            </Link>
                        </div>
                        <div className=" ">
                            <h3 className="pl-3 text-xl md:text-3xl font-medium">Contacts</h3>
                            <ul className="">
                                <li className="text-sm p-2 md:text-lg">0700930292</li>
                                <li className="text-sm p-2 md:text-lg">lakewoodhavens@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="md:px-20">
                <hr className=""></hr>
            </div>
            <footer className=" p-4 text-sm md:text-base md:px-20 md:py-10">
                <p>© 2024 Lakewood Haven Kindergarten , All rights reserved.</p>
            </footer>


        </div>
    )
}

export default Contact;