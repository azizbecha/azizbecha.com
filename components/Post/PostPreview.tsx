import Link from "next/link";
import Heading from "../Heading";
import Image from "next/image";
import Tag from "./Tag";
import { readingTime } from "reading-time-estimator";
import { Post } from "@/types";

interface Props {
    post: Post
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
                        layout="responsive"
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
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                        <Tag tag={tag} key={index} />
                    ))}
                </div>
                <p className="text-main text-left mt-2 font-mono font-semibold hover:font-bold hover:underline">
                    {readingTime(post.content).text}
                </p>
            </div>
        </Link>
    );
};

export default PostPreview;
