import moment from "moment";
import ContributorsList from "./ContributorsList";
import { Heading } from "../Heading";
import { FaClock } from "react-icons/fa6";

interface Props {
    title: string,
    date: string,
    contributors: string
}
export const PostHeader = (props: Props) => {
    const formattedDate = moment(props.date).format('MMMM D, YYYY');
    const authors = props.contributors.split(/[,]+/);

    return (
        <div className="mb-5">
            <Heading variant="h1" className="mb-5">{props.title}</Heading>
            <time dateTime={props.date} className="flex font-mono italic text-emerald-500 font-semibold items-center">
                <FaClock className="mr-1" size={13} /> {formattedDate}
            </time>

            <ContributorsList authors={authors} />
        </div>
    );
}