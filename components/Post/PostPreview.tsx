import Link from "next/link";
import Image from "next/image";

import { readingTime } from "reading-time-estimator";

import Heading from "../Heading";
import Button from "../Button";

import { Post } from "@/types";
import { FaClock } from "react-icons/fa6";

interface Props {
    post: Post;
}

const PostPreview: React.FC<Props> = (props) => {
    const { post } = props;

    return (
        <Link href={`posts/${post.slug}`}>
            <div className="group post-preview p-3 rounded-xl bg-gray-800 cursor-pointer">
                <div className="relative overflow-hidden mb-3 rounded-xl">
                    <Image
                        src={post.image}
                        alt={`Image of ${post.title}`}
                        width={500}
                        height={250}
                        className="rounded-xl transition-transform duration-300 transform hover:scale-125"
                    />
                </div>
                <div className="mb-2">
                    <Heading variant="h5" className="font-ubuntu font-medium text-white">
                        {post.title}
                    </Heading>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <Link href={`posts/${post.slug}`}>
                        <Button secondary>Read More</Button>
                    </Link>
                    <div className="flex items-center gap-1 text-main">
                        <FaClock size={13} /> 
                        <p className="text-left font-ubuntu font-semibold hover:font-bold hover:underline">
                            {readingTime(post.content).text}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PostPreview;
