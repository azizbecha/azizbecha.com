"use client"
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsNavbarOpen(window.innerWidth < 768);
            console.log("updating height");
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    return (
        <div className={`flex flex-wrap items-start justify-start gap-2 px-5 sm:px-20 md:px-48 py-2 sm:py-4 bg-black ${isNavbarOpen ? 'flex-col w-full' : 'flex-row'}`}>
            {/* Toggle Button for Mobile and Tablet */}
            <button
                className="block sm:hidden text-white"
                onClick={toggleNavbar}
            >
                {isNavbarOpen ? 'Close' : 'Open'} Navbar
            </button>

            {/* Navigation Buttons */}
            <div className={`sm:flex gap-3 ${isNavbarOpen ? 'flex-col w-full' : 'hidden'}`}>
                <button className={`flex ${isNavbarOpen && 'w-full mb-2'} items-center justify-center px-2.5 py-2 sm:text-sm md:text-base rounded-md bg-main text-white font-sans font-medium transition duration-300 ease-in-out transform hover:bg-opacity-75`}>
                    🏠 Home
                </button>

                <button className={`flex ${isNavbarOpen && 'w-full mb-2'} items-center justify-center px-2.5 py-2 sm:text-sm md:text-base rounded-md bg-grey text-white font-sans font-medium transition duration-300 ease-in-out transform hover:bg-opacity-75`}>
                    📝 Blog
                </button>

                <button className={`flex ${isNavbarOpen && 'w-full mb-2'} items-center justify-center px-2.5 py-2 sm:text-sm md:text-base rounded-md bg-grey text-white font-sans font-medium transition duration-300 ease-in-out transform hover:bg-opacity-75`}>
                    📌 Tips
                </button>

                <button className={`flex ${isNavbarOpen && 'w-full mb-2'} items-center justify-center px-2.5 py-2 sm:text-sm md:text-base rounded-md bg-grey text-white font-sans font-medium transition duration-300 ease-in-out transform hover:bg-opacity-75`}>
                    📁 Resources
                </button>

                <button className={`flex ${isNavbarOpen && 'w-full mb-2'} items-center justify-center px-2.5 py-2 sm:text-sm md:text-base rounded-md bg-grey text-white font-sans font-medium transition duration-300 ease-in-out transform hover:bg-opacity-75`}>
                    💡 Contact
                </button>
            </div>
        </div>
    );
};
