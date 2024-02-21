import Link from "next/link";

interface Props {
    postId: string;
    title: string;
    date: string;
    category: string
}

export const PostPreview: React.FC<Props> = (props) => {
    return (
        <Link href={`posts/${props.postId}`}>
            <div className="group post-preview flex justify-between items-center mt-2 mb-1 py-2">
                <div className="flex">
                    <h3 className="font-ubuntu font-medium text-lg text-grey hover:text-white hover:underline">
                        {props.title}
                    </h3>
                    <span className="bg-main text-sm font-mono font-normal px-2 py-0.5 my-auto ml-3 rounded-md">{props.category}</span>
                </div>
                <h5 className="text-main font-mono font-light hover:font-bold hover:underline">{props.date}</h5>
            </div>
        </Link>
    );
};
