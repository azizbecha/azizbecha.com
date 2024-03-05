import moment from "moment";

interface Props {
    title: string
    date: string
}
export const PostTitle = (props: Props) => {
    const formattedDate = moment(props.date).format('MMMM D, YYYY');

    return (
        <div className="mb-10">
            <h1 className="text-white font-ubuntu text-5xl font-bold mb-5">{props.title}</h1>
            <time dateTime={props.date} className="font-mono italic text-emerald-500 font-semibold">
                - {formattedDate}
            </time>
        </div>
    );
}