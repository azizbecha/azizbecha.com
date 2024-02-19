"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 w-full">
                <div className="col-span-3 sm:col-span-2">
                    <h1 className="hero-title text-main font-ubuntu font-bold text-6xl mb-8">
                        <TypeAnimation
                            sequence={["Hey, I'm Aziz Becha !", 1000]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-3xl text-white font-sans text-justify">
                        I'm a software developer and programmer who makes open-source projects
                        and writes about life, code, design, and more. <br />
                        Welcome to my digital space where I share my ideas, tips, thoughts and resources with you. ✨
                    </p>
                </div>
                <div className="w-full h-full hidden sm:block">
                    <img src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-cartoon-illustration-red-rocket-png-image_6515439.png" className="w-full m-auto animate-bounce" />
                </div>
            </div>
        </div>
    );
}