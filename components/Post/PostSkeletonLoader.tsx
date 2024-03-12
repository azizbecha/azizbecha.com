const PostSkeletonLoader = () => {
    return (
        <div className="animate-pulse group post-preview flex justify-between items-center gap-1 mt-1 mb-2 py-4">
            <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-gray-600 rounded-md animate-pulse"></div>
                <div className="flex flex-col">
                    <div className="w-full h-6 bg-gray-600 rounded-md animate-pulse"></div>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="bg-gray-600 w-10 h-4 rounded-md animate-pulse"></span>
                        <span className="bg-gray-600 w-10 h-4 rounded-md animate-pulse"></span>
                    </div>
                </div>
            </div>
            <div className="w-20 h-6 bg-gray-600 rounded-md animate-pulse"></div>
        </div>
    )
}

export default PostSkeletonLoader;