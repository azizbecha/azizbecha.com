import moment from "moment";
import Link from "next/link";
import { FaTag } from "react-icons/fa";

interface Props {
    postId: string;
    title: string;
    date: string;
    category: string
    image: string
}

export const PostPreview: React.FC<Props> = (props) => {
    const tags = props.category.split(",");
    console.log(tags)

    return (
        <Link href={`posts/${props.postId}`}>
            <div className="group post-preview flex justify-between items-center gap-1 mt-1 mb-2 py-4">
                <div className="flex items-center gap-2">
                    <img src={props.image} alt={`Image of ${props.title}`} className="mr-2 w-14 rounded-md" />

                    <div className="flex flex-col">
                        <h3 className="font-ubuntu font-medium text-lg text-grey-lighter hover:text-white hover:underline">
                            {props.title}
                        </h3>
                        <div className="flex items-center gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-main flex items-center text-xs sm:text-sm font-mono font-normal px-1.5 py-0.5 mt-1 rounded-md w-min"
                                >
                                    <FaTag className="mr-1 text-white" size={10} /> {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <h5 className="text-main text-right m-2 font-mono font-semibold hover:font-bold hover:underline">
                    {moment(props.date, "YYYY-MM-DD").format("MMMM YYYY")}
                </h5>
            </div>
        </Link>
    );
};