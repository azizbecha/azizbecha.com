import Heading from "../Heading"
import Tag from "./Tag"

interface Props {
    tags: string[]
}

const PostTags: React.FC<Props> = (props) => {
    const { tags } = props;
    
    return (
        <div className='bg-gray-800 px-4 py-3 rounded-xl w-full' style={{ zIndex: 1 }}>
            <Heading variant="h5" className="mb-1 uppercase">Tags ({tags.length})</Heading>
            <div className="flex gap-x-2">
                {
                    tags.map((tag: string, index: any) => {
                        return <Tag tag={tag} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default PostTags