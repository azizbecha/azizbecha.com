import Link from "next/link";

import moment from "moment";
import { readingTime } from 'reading-time-estimator'

import { FaClock } from "react-icons/fa6";

import ContributorsList from "./ContributorsList";
import Heading from "../Heading";

interface Props {
    title: string,
    date: string,
    content: string,
    contributors: string
}

const BreadCrumb = () => {
    return (
        <nav className="flex mb-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center text-gray-400 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-blue-600">
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <Link href="../posts" className="ms-1 text-sm font-medium">Blog</Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </div>
                </li>
            </ol>
        </nav>
    )
}

export const PostHeader = (props: Props) => {
    const formattedDate = moment(props.date).format('MMMM D, YYYY');
    const authors = props.contributors.split(/[,]+/);
    const timeEstimation = readingTime(props.content);

    return (
        <div className="mb-5">
            <div data-aos="fade-right" data-aos-duration="250">
                <BreadCrumb />
                <Heading variant="h1" className="mb-5">{props.title}</Heading>
                <time dateTime={props.date} className="flex font-mono text-emerald-500 font-semibold items-center">
                    <FaClock className="mr-1" size={13} /> Published on {formattedDate}
                </time>

                <ContributorsList authors={authors} />
                <span className="flex font-mono text-indigo-500 font-semibold items-center">
                    <FaClock className="mr-1" size={13} /> Reading time: {timeEstimation.text}
                </span>
            </div>
        </div>
    );
}