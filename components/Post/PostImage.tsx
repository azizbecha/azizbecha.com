import Image from "next/image";

interface Props {
    image: string
}
const PostImage: React.FC<Props> = (props) => {
    const { image } = props;

    return (
        <Image alt="" width={0} height={0} sizes="100vw" src={image} className="mb-5 rounded-3xl w-full" data-aos="fade-up" />
    )
}

export default PostImage;