import moment from "moment";
import ContributorsList from "./ContributorsList";
import { Heading } from "../Heading";

interface Props {
    title: string,
    date: string,
    contributors: string
}
export const PostHeader = (props: Props) => {
    const formattedDate = moment(props.date).format('MMMM D, YYYY');
    const authors = props.contributors.split(/[,]+/);

    return (
        <div className="mb-10">
            <Heading variant="h1" className="mb-5">{props.title}</Heading>
            <time dateTime={props.date} className="font-mono italic text-emerald-500 font-semibold">
                - {formattedDate}
            </time>
            <ContributorsList authors={authors} />
        </div>
    );
}