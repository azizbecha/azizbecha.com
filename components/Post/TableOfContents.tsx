import React from "react";
import Toc from "react-toc";
import { Heading } from "../Heading";

interface Props {
    content: string;
}

const TableOfContents: React.FC<Props> = (props) => {
    return (
        <div className='sticky top-5 bg-gray-800 px-4 py-3 rounded-3xl w-full'>
            <Heading variant="h5" className="mb-2 uppercase">Table of contents</Heading>
            <Toc markdownText={props.content} className="toc" />
        </div>
    )
};

export default TableOfContents;