import { IoIosHeart } from "react-icons/io";
import { FaGithub, FaFacebook, FaLinkedin, FaCoffee } from 'react-icons/fa';

import Heading from "./Heading";
import Divider from "./Divider";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white font-ubuntu px-4 py-6 sm:px-8 md:px-10 lg:px-32">
            <div className="flex flex-col sm:flex-row w-full">
                <div className="sm:w-3/4">
                    <Heading variant="h4">Aziz Becha</Heading>
                    <p className="text-xs sm:text-sm mt-2">
                        I design and code beautifully simple things. I do what I love and I love what I do. <br />
                        Busy fixing bugs now, I&apos;ll write a proper bio later.
                    </p>
                </div>
                <div className="flex justify-end items-center sm:w-1/4 mt-4 sm:mt-0">
                    <a href={process.env.NEXT_GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaGithub size={24} /></a>
                    <a href={process.env.NEXT_YOUTUBE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaYoutube size={24} /></a>
                    <a href={process.env.NEXT_LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaLinkedin size={24} /></a>
                    <a href={process.env.NEXT_FACEBOOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaFacebook size={24} /></a>
                </div>
            </div>


            <Divider />
            <div className="flex justify-center mt-4">
                <ul className="flex gap-4 text-sm">
                    <li><Link href="/" className="text-white">Home</Link></li>
                    <li><Link href="/about" className="text-white">About</Link></li>
                    {/* <li><Link href="/projects" className="text-white">Projects</Link></li> */}
                    <li><Link href="/posts" className="text-white">Blog</Link></li>
                    <li><Link href="/contact" className="text-white">Contact</Link></li>
                </ul>
            </div>

            <div className="flex justify-center mt-5">
                <span className="text-center text-sm flex gap-1 items-center font-mono">
                    &copy; {new Date().getFullYear()} Aziz Becha - Made with a lot of <IoIosHeart className="text-main" /> & <FaCoffee className="text-yellow-900" />
                </span>
            </div>
        </div>
    )
}

export default Footer;
