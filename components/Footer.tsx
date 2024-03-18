import { IoIosHeart } from "react-icons/io";
import { FaGithub, FaFacebook, FaLinkedin, FaCoffee } from 'react-icons/fa';

import Heading from "./Heading";
import Divider from "./Divider";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white font-ubuntu py-5 px-2 sm:px-32">
            <div className="flex flex-col sm:flex-row w-full">
                <div className="sm:w-3/4">
                    <Heading variant="h4">Aziz Becha</Heading>
                    <p className="text-xs sm:text-sm">
                        I design and code beautifully simple things. I do what I love and I love what I do. <br />
                        Busy fixing bugs now, I'll write a proper bio later.
                    </p>
                </div>
                <div className="flex justify-end items-center sm:w-1/4 mt-4 sm:mt-0">
                    <a href={process.env.NEXT_GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaGithub size={24} /></a>
                    <a href={process.env.NEXT_FACEBOOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaFacebook size={24} /></a>
                    <a href={process.env.NEXT_LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaLinkedin size={24} /></a>
                </div>
            </div>


            <Divider />
            <div className="flex justify-center mt-4">
                <ul className="flex gap-4 text-sm">
                    <li><a href="/home" className="text-white">Home</a></li>
                    <li><a href="/about" className="text-white">About</a></li>
                    <li><a href="/projects" className="text-white">Projects</a></li>
                    <li><a href="/blog" className="text-white">Blog</a></li>
                    <li><a href="/contact" className="text-white">Contact</a></li>
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
