"use client"

import { useState } from 'react';
import Link from 'next/link';

import axios from 'axios';
import toast from 'react-hot-toast';

import { FaTimesCircle } from 'react-icons/fa';

import Button from './Button';
import Heading from './Heading';
import Tile from './Tile';

const Hero = () => {
    const [joke, setJoke] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [showJoke, setShowJoke] = useState<boolean>(false);

    const fetchRandomJoke = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
            if (!response.data || response.data.error) {
                toast.error('Failed to fetch joke. Please try later');
            }
            const data = response.data;
            setTimeout(() => {
                setJoke(data.joke);
                setLoading(false);
                setShowJoke(true);
            }, 1000); // Delay before showing the joke
        } catch (error) {
            setLoading(false);
            console.error('Error fetching joke:', error);
            toast.error('Failed to fetch joke');
        }
    };

    const handleCloseJoke = () => {
        setShowJoke(false);
        setJoke(null);
    };

    return (
        <Tile className="animated-border border-2 border-transparent mb-5">
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

            <div className="flex gap-3">
                <Link href="about">
                    <Button>
                        Learn more
                    </Button>
                </Link>

                <Button secondary onClick={fetchRandomJoke}>I want a random joke 😂</Button>
            </div>

            {showJoke && !loading && (
                <div data-aos="fade-down" data-aos-duration="250" className="p-4 bg-emerald-600 rounded-xl mt-3 relative">
                    <button className="absolute top-2 right-2" onClick={handleCloseJoke}>
                        <FaTimesCircle className="h-5 w-5 text-white" />
                    </button>
                    <p className='pr-2'>{joke}</p>
                </div>
            )}

            {loading && (
                <div data-aos="fade-down" data-aos-duration="250" className="p-4 bg-sky-500 rounded-xl mt-3 flex justify-center items-center gap-2">
                    <div
                        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                        role="status"
                    >
                    </div>
                    <p>Loading</p>
                </div>
            )}
        </Tile>
    );
}

export default Hero