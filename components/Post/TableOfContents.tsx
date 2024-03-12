import React from "react";
import Toc from "react-toc";
import { Heading } from "../Heading";

interface Props {
    content: string;
}

const TableOfContents: React.FC<Props> = (props) => {
    return (
        <div className='sticky top-5 bg-gray-800 p-4 rounded-lg w-full'>
            <Heading variant="h5" className="mb-3 tracking-widest uppercase">Table of contents</Heading>
            <Toc markdownText={props.content} className="toc" />
        </div>
    )
};

export default TableOfContents;