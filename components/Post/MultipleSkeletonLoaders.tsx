import PostSkeletonLoader from "./PostSkeletonLoader"

interface Props {
    count?: number
}
const MultipleSkeletonLoaders: React.FC<Props> = ({ count = 3 }) => {

    const array = Array.from({ length: count }, (_, index) => index);

    return (
        <>
            {array.map((_, key) => (
                <PostSkeletonLoader key={key} />
            ))}
        </>
    );
}

export default MultipleSkeletonLoaders