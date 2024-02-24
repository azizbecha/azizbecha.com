interface Props {
    title: string
}
export const PostTitle = (props: Props) => {
    return (
        <h1 className="text-white font-ubuntu text-4xl font-bold">{props.title}</h1>
    )
}