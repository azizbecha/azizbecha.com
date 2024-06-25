"use client"

import { useEffect, useState } from "react"

import Container from "@/components/Container"
import Divider from "@/components/Divider"
import Heading from "@/components/Heading"
import Tile from "@/components/Tile"
import Button from "@/components/Button"

import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

function calculateAge(): number {
    const birthDate: Date = new Date("2005-05-12");
    const currentDate: Date = new Date();

    const yearsDiff: number = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the current date hasn't passed the birth date of the person this year
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        return yearsDiff - 1; // Subtract 1 year if the birthday hasn't occurred yet
    } else {
        return yearsDiff;
    }
}

const AboutMe = () => {
    return (
        <section id="about">
            <Tile>
                <Heading variant="h2" className="mb-4 font-serif">Hey there! I&apos;m Aziz Becha ✨</Heading>
                <Heading variant="body-small" className="text-justify font-normal mb-5">
                    I&apos;m a {calculateAge()}-year-old on a mission in the world of tech and business. 🚀 As a solopreneur, I wear many hats—I&apos;m a software engineer, developer, and avid reader. 📚 My passion for creating software and diving into the world of entrepreneurship drives me forward every day.
                </Heading>

                <div className="grid grid-cols-3 grid-rows-1 gap-3 mb-4">
                    <img src="../me2.jpg" className="w-full h-auto rounded-xl" />
                    <img src="../me3.jpg" className="w-full h-auto rounded-xl" />
                    <img src="../me.jpg" className="w-full h-auto rounded-xl" />
                </div>

                <Heading variant="body-small" className="text-justify font-normal mb-5">
                    I&apos;m all about open source—it&apos;s like my playground! I love cooking up new projects and sharing them with the world. 🌍 Whether it&apos;s coding up a storm or exploring the latest trends in the industry, I&apos;m always eager to learn and grow.
                </Heading>

                <Heading variant="body-small" className="text-justify font-normal mb-5">
                    💼 When I&apos;m not buried in lines of code, you&apos;ll often find me immersed in discussions about business strategies and new ideas. 💡 I thrive on connecting with like-minded individuals and exchanging knowledge. Let&apos;s chat! I&apos;m all ears for intriguing conversations and exciting collaborations.
                </Heading>

                <Heading variant="body-small" className="text-justify font-normal mb-5">
                    ✨ I created this blog as a platform to share my experiences, insights, and knowledge with others who are just as passionate about technology and entrepreneurship as I am. 📝 Whether you&apos;re a seasoned pro or just starting out, my goal is to provide valuable content that inspires, educates, and empowers you on your own journey.
                </Heading>

                <Heading variant="body-small" className="text-justify font-normal">
                    🌟 Join me on this journey as we explore the endless possibilities of technology, entrepreneurship, and everything in between. Together, we&apos;ll build, innovate, and make a difference!
                </Heading>
            </Tile>
        </section>
    )
}

const Projects = () => {

    const elements = [
        {
            name: "ShibHouse",
            description: "Shibhouse is a voice-chatting, podcasts, meme-based platform created as a joke that went viral in a short time to re-take voice conversations to the moon 🚀",
            image: "../shibhouse.png",
            link: "https://github.com/azizbecha/shibhouse"
        },
        {
            name: "RapidSocket",
            image: "../rapidsocket.png",
            description: "RapidSocket S is the ultimate smart socket for your home automation needs. This innovative device brings a new level of convenience and control to your home.",
            link: "https://www.youtube.com/watch?v=qFxaPVS9yBY"
        },
        {
            name: "VSJoke",
            image: "../vsjoke.png",
            description: "VSJoke is a VSCode extension made for humour purposes that brings programming-related jokes in your workspace with custom languages and filters.",
            link: "https://marketplace.visualstudio.com/items?itemName=azizbecha.vsjoke"
        },
        {
            name: "VSAdhkar",
            image: "../vsadhkar.png",
            description: "VSAdhkar is a VSCode extension that brings daily adhkar and dua directly into your workspace to stay spiritually connected while you work.",
            link: "https://marketplace.visualstudio.com/items?itemName=azizbecha.vsjoke"
        },
        {
            name: "Papritech",
            image: "../papritech.png",
            description: "Papritech, also known as Paprika Technologies, is working at the forefront of technology to empower the music industry around the world.",
            link: "https://papritech.com"
        },
    ];

    return (
        <section id="projects">
            <Tile>
                <Heading variant="h2" className="mb-4 font-serif">Projects 💻</Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {
                        elements.map((element, key) => (
                            <div className="bg-gray-800 p-3 rounded-md" key={key}>
                                <img src={element.image} className="mb-3" />
                                <Heading variant="h5" className="mb-1.5">{element.name}</Heading>
                                <Heading variant="body-small">
                                    {element.description}
                                </Heading>

                                <div className="mt-3 bottom-0 relative">
                                    <a href={element.link} target="_blank" rel="noreferrer">
                                        <Button>
                                            View project
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Tile>
        </section>
    )
}

const Socials = () => {

    const elements = [
        {
            name: "GitHub",
            link: "https://github.com/azizbecha",
            icon: FaGithub
        },
        {
            name: "Twitter ~ X",
            link: "https://x.com/azizbechaa",
            icon: FaXTwitter
        },
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/azizbecha",
            icon: FaLinkedin
        },
        {
            name: "Facebook",
            link: "https://facebook.com/azizbechaa",
            icon: FaFacebook
        },
        {
            name: "Instagram",
            link: "https://instagram.com/azizbechaa",
            icon: FaInstagram
        },
        {
            name: "Email",
            link: "mailto:aziz07becha@gmail.com",
            icon: FaEnvelope
        },
    ];

    return (
        <section id="socials">
            <Tile>
                <Heading variant="h2" className="mb-2 font-serif">Socials 🌐</Heading>
                <Heading variant="body-small">
                    I&apos;m not very active on socials, but here are mine anyway 👇
                </Heading>

                <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 mt-4">
                    {
                        elements.map((element, key) => (
                            <a href={element.link} target="_blank" rel="noreferrer" className="p-2 bg-main rounded-lg h-36 justify-center items-center flex flex-col text-center hover:p-5 hover:shadow hover:drop-shadow-sm transition-all hover:shadow-white" key={key}>
                                <element.icon size={50} />
                                <div className="mt-2">{element.name}</div>
                            </a>
                        ))
                    }
                </div>
            </Tile>
        </section>
    )
}

const About = () => {

    const [activeTab, setActiveTab] = useState('about');

    const Tabs: React.FC = () => {

        const elements = [
            {
                path: "#about",
                name: "About",
            },
            {
                path: "#projects",
                name: "Projects",
            },
            {
                path: "#socials",
                name: "Socials",
            },
            {
                path: "#fun-facts",
                name: "Fun Facts",
            },
        ];

        return (
            <div className="drop-shadow-2xl text-center text-white mb-5 -mt-8 mx-auto z-50 sticky top-0 bg-gray-800 w-full rounded-b-md">
                <ul className="flex justify-center items-center flex-wrap -mb-px mx-auto">
                    {
                        elements.map((element, key) => (
                            <li className="me-2" key={key}>
                                <a href={element.path} className={`inline-block text-xs md:text-sm font-medium px-4 sm:px-6 py-2 sm:py-3 border-b-2 border-transparent rounded-t-lg ${activeTab === element.path.slice(1) && 'text-white border-white'}`}>{element.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id') || "";

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveTab(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container>
            <Heading variant="h1" className="text-main text-center mb-3 mt-5">
                About 👋
            </Heading>
            <Heading variant="body" className="text-center">
                Interested to learn more about who I am? You&apos;re in the perfect spot!
            </Heading>
            <Divider />

            <Tabs />
            {/*
                This page will be divided into x parts:
                - About me: A brief description
                - Projects: 
                - Socials
                - Fun Facts
                
            */}
            <AboutMe />

            <Divider />

            <Projects />

            <Divider />

            <Socials />

            <Divider />

            <section id="fun-facts">
                <Heading variant="h2" className="mb-4 font-serif">Fun Facts 😂</Heading>
            </section>

        </Container>
    )
}

export default About