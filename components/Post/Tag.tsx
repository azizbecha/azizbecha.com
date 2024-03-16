import { FaTag } from "react-icons/fa6"

interface Props {
    tag: string
}

const Tag: React.FC<Props> = (props) => {
    const { tag } = props;

    return (
        <span
            className="bg-main flex items-center text-xs sm:text-sm font-mono font-normal px-1.5 py-0.5 mt-1 rounded-md w-min"
        >
            <FaTag className="mr-1 text-white" size={10} /> {tag.trim()}
        </span>
    )
}

export default Tag