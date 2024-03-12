import React from 'react';
import { Heading } from '../Heading';
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
  } else if (index == count - 1) {
    return "";
  } else {
    return ", ";
  }
}

const Author: React.FC<AuthorProps> = ({ index, authorName, count }) => {
  if (count == 1) {
    // If there is only 1 author
    return <>{authorName}</>
  } else {
    // If there are multiple authors
    return (
      <>
        {authorName.trim()}{prefix(count, index)}
      </>
    )
  }
}

const ContributorsList: React.FC<Props> = ({ authors }) => {
  const numberOfAuthors = authors.length;

  return (
    <div className="text-sky-400">
      <Heading variant='body-small' className="font-ubuntu font-semibold items-center flex">
        <span className='flex mr-1 items-center'>
          <FaPenToSquare className='mr-1' /> Written by {" "}
        </span>
        <span>
          {numberOfAuthors === 1 ? (
            <span className="font-ubuntu font-semibold">{authors[0]}</span>
          ) : (
            authors.map((author, key) => (
              <span className="font-ubuntu font-semibold" key={key}>
                <Author authorName={author} index={key} count={numberOfAuthors} />
              </span>
            ))
          )}
        </span>
      </Heading>
    </div>
  );
};

export default ContributorsList;
