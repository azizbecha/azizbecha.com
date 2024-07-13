"use client"

import { FC, useEffect, useState, useCallback } from "react";
import { Post } from "@/types";
import DatePicker from "react-datepicker";

import MultipleSkeletonLoaders from "./MultipleSkeletonLoaders";
import PostPreview from "./PostPreview";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
    limit?: number;
    allowFilter?: boolean
}

const Posts: FC<Props> = ({ limit, allowFilter = false }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // States for filter inputs
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const fetchPosts = async (params: URLSearchParams) => {
        setLoading(true);
        setPosts([]); // Clear old posts before fetching new ones
        try {
            const queryString = params.toString() ? `?${params.toString()}` : '';
            const response = await fetch(`/api/posts/filter${queryString}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch posts. Status: ${response.status}`);
            }

            const fetchedPosts: Post[] = await response.json();
            setPosts(fetchedPosts);
        } catch (error: any) {
            console.error("Error fetching posts:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = useCallback((setFunction: (value: string) => void, value: string) => {
        setFunction(value);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();
        if (title) params.append('title', title);
        if (tags) params.append('tags', tags);
        if (startDate) params.append('startDate', startDate.toISOString());
        if (endDate) params.append('endDate', endDate.toISOString());

        const delayDebounceFn = setTimeout(() => {
            fetchPosts(params);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [title, tags, startDate, endDate]);

    // Sort posts based on limit
    const sortedPosts = limit ? posts.slice(0, limit).sort((a, b) => b.date.localeCompare(a.date)) : posts;

    return (
        <div>
            {
                allowFilter && (
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-2 bg-black p-4 sm:p-6 rounded-xl sticky top-0 z-20">
                        <div>
                            <label className="font-ubuntu">Title</label>
                            <input
                                type="text"
                                placeholder="Please enter title here"
                                value={title}
                                onChange={(e) => handleInputChange(setTitle, e.target.value)}
                                className="block mt-1.5 px-3 py-2.5 w-full text-sm bg-grey rounded-lg focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="font-ubuntu">Tags</label>
                            <input
                                type="text"
                                placeholder="Tags (comma separated)"
                                value={tags}
                                onChange={(e) => handleInputChange(setTags, e.target.value)}
                                className="block mt-1.5 px-3 py-2.5 w-full text-sm bg-grey rounded-lg focus:outline-none"
                            />
                            {/* <Select
                                options={suggestions}
                                //className="block mt-1.5 px-3 py-2.5 w-full text-sm bg-grey rounded-lg focus:outline-none"
                                isMulti
                                isSearchable
                                backspaceRemovesValue
                                //classNames={}
                            /> */}


                            {/* <ReactTags
                                labelText="Select countries"
                                selected={selected}
                                suggestions={suggestions}
                                onAdd={onAdd}
                                onDelete={onDelete}
                                noOptionsText="No matching countries"
                            /> */}
                        </div>

                        <div>
                            <label className="font-ubuntu">Start date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date | null, event?: React.SyntheticEvent<any> | undefined) => setStartDate(date)}
                                wrapperClassName="mt-1.5 w-full"
                                className="px-3 py-2.5 text-sm bg-grey rounded-lg focus:outline-none w-full"
                                placeholderText="Please select start date"
                            />
                        </div>

                        <div>
                            <label className="font-ubuntu">End date</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date | null, event?: React.SyntheticEvent<any> | undefined) => setEndDate(date)}
                                wrapperClassName="mt-1.5 w-full"
                                className="px-3 py-2.5 text-sm bg-grey rounded-lg focus:outline-none w-full"
                                placeholderText="Please select end date"
                            />
                        </div>
                    </div>
                )
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    loading ? (
                        <MultipleSkeletonLoaders />
                    ) : sortedPosts.map((post, key) => (
                        <PostPreview
                            key={key}
                            post={post}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;
