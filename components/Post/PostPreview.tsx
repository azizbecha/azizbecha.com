import moment from "moment";
import Link from "next/link";
import { FaTag } from "react-icons/fa";
import Heading from "../Heading";
import Image from "next/image";
import Tag from "./Tag";

interface Props {
    postId: string;
    title: string;
    date: string;
    tags: string[]
    image: string
}

const PostPreview: React.FC<Props> = (props) => {

    return (
        <Link href={`posts/${props.postId}`}>
            <div className="group post-preview flex justify-between items-center gap-1 mt-1 mb-2 p-3 rounded-xl bg-grey">
                <div className="flex items-center gap-2">
                    <Image width={0} height={0} sizes="100vw" src={props.image} alt={`Image of ${props.title}`} className="mr-2 w-28 rounded-md" />

                    <div className="flex flex-col">
                        <Heading variant="h5" className="font-ubuntu font-medium text-lg text-grey-lighter hover:text-white hover:underline">
                            {props.title}
                        </Heading>
                        <div className="flex items-center gap-2">
                            {props.tags.map((tag, index) => (
                                <Tag tag={tag} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-main text-right m-2 font-mono font-semibold hover:font-bold hover:underline">
                    {moment(props.date, "YYYY-MM-DD").format("MMMM YYYY")}
                </p>
            </div>
        </Link>
    );
};

export default PostPreview