import moment from "moment";
import ContributorsList from "./ContributorsList";

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
            <h1 className="text-white font-ubuntu text-5xl font-bold mb-5">{props.title}</h1>
            <time dateTime={props.date} className="font-mono italic text-emerald-500 font-semibold">
                - {formattedDate}
            </time>
            <ContributorsList authors={authors} />
        </div>
    );
}