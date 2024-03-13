
interface Props {
    image: string
}
const PostImage: React.FC<Props> = (props) => {
    const { image } = props;

    return (
        <img src={image} className="mb-8 rounded-3xl" data-aos="fade-up" />
    )
}

export default PostImage;