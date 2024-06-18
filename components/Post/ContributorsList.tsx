import React from 'react';
import Heading from '../Heading';
import { FaPenToSquare } from 'react-icons/fa6';

interface Props {
  authors: string[];
}

interface AuthorProps {
  index: number,
  count: number,
  authorName: string
}

const prefix = (count: number, index: number) => {
  if (index === count - 2) {
    return " & ";
  } else if (index === count - 1) {
    return "";
  } else {
    return ", ";
  }
}

const Author: React.FC<AuthorProps> = ({ index, authorName, count }) => {
  if (count === 1) {
    // If there is only 1 author
    return <span className='hover:underline'>{authorName.trim()}</span>;
  } else {
    // If there are multiple authors
    return (
      <>
        <span className='hover:underline'>{authorName.trim()}</span>{prefix(count, index)}
      </>
    );
  }
};

const ContributorsList: React.FC<Props> = ({ authors }) => {
  const Authors = () => {
    const numberOfAuthors = authors.length;
    return (
      <>
        {numberOfAuthors === 1 ? (
          <span className="font-ubuntu font-semibold">{authors[0]}</span>
        ) : (
          authors.map((author, key) => (
            <span className="font-ubuntu font-semibold" key={key}>
              <Author authorName={author} index={key} count={numberOfAuthors} />
            </span>
          ))
        )}
      </>
    );
  };

  return (
    <div className="text-sky-400">
      <div className="font-ubuntu font-semibold items-center">
        <span className="inline-block">
          <FaPenToSquare className='inline-block align-middle mr-1' size={13} />Written by{" "}
          <Authors />
        </span>
      </div>
    </div>
  );
};

export default ContributorsList;
