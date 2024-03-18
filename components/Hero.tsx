import Link from 'next/link';
import { Button } from './Button';
import { Heading } from './Heading';

export const Hero = () => {

    return (
        <div className="my-5 bg-black p-7 rounded-xl animated-border border-2 border-transparent">
            <div className="mb-2">
                <Heading variant='h1' className="hero-title text-main font-ubuntu font-bold text-5xl mb-3">
                    Hey, I&apos;m Aziz Becha ✨
                </Heading>
                <Heading variant='body'>
                    A passionate nerd and maker into crafting products and open-source projects 🎯.
                    My journey is all about creative projects, where I&apos;m always learning and discovering 📖.
                    Welcome to my digital space, where I share thoughts on life, code, design, tips, and more, and where innovation grows 🌱.
                </Heading>
            </div>

            <div className="">
                <Link href="about">
                    <Button>
                        Learn more
                    </Button>
                </Link>
            </div>
        </div>
    );
}