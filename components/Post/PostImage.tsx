
interface Props {
    image: string
}
const PostImage: React.FC<Props> = (props) => {
    const { image } = props;

    return (
        <img src={image} className="mb-8 rounded-3xl" />
    )
}

export default PostImage;