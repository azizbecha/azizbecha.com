const PostSkeletonLoader = () => {
    return (
        <div className="group post-preview p-3 rounded-xl bg-gray-800 cursor-pointer animate-pulse">
            <div className="relative overflow-hidden mb-3 rounded-xl">
                <div className="bg-gray-600 w-full h-48 rounded-xl"></div>
            </div>
            <div className="mb-2">
                <div className="h-6 bg-gray-600 w-4/5 rounded-md"></div>
            </div>

            <div className="flex justify-between items-center gap-2">
                <div className="h-8 bg-gray-600 w-1/4 rounded-md"></div>
                <div className="flex items-center gap-1 text-main rounded-md">
                    <div className="h-4 w-12 bg-gray-600 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

export default PostSkeletonLoader;