import Image from "next/image";
import logo from "../../../public/images/logo.png"
import Link from "next/link";

function Contact() {

    return (
        <div id="contactus" className=" bg-slate-900 text-white mt-20">
            <div className="bg-white rounded-full w-full"></div>
            <div className=" grid gap-5 px-3 md:flex md:p-20  justify-between  ">

                <div class="max-md:py-4 lg:py-20 lg:px-10 text-center  flex flex-col justify-center items-center">
                    <Image src={logo} width={140} />
                    <p class="text-base md:text-lg font-medium">The Angels Paradise <br />TheMontessori Home</p>
                    <div class="flex gap-6 pt-3 md:text-base">
                        <Link href="https://www.facebook.com/profile.php?id=61554101394721"> <i class="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i></Link>
                        <Link href="https://www.instagram.com/lakewood_havens_kindergaden/"> <i class="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i> </Link>
                        <Link href="https://www.youtube.com/@LakeWoodHavensKindergarden"> <i class="bi bi-youtube" style={{ fontSize: "1.5rem" }}></i> </Link>
                    </div>

                </div>


                <div className="md:pl-[10%] lg:pl-[30%] md:py-10 lg:py-24">
                    <div className="grid grid-cols-2 lg:grid-cols-3">
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
                                <li className="text-sm p-2 md:text-lg">0715655142</li>
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