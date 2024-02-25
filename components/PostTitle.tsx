interface Props {
    title: string
    date: string
}
export const PostTitle = (props: Props) => {
    return (
        <div className="mb-10">
            <h1 className="text-white font-ubuntu text-5xl font-bold mb-5">{props.title}</h1>
            <p className="font-mono italic text-emerald-500 font-semibold">- {props.date}</p>
        </div>
    )
}