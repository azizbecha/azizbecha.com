import React from 'react';

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
      <p className="font-ubuntu font-semibold">
        Written by {" "}
        {numberOfAuthors === 1 ? (
          <span className="font-ubuntu font-semibold">{authors[0]}</span>
        ) : (
          authors.map((author, key) => (
            <span className="font-ubuntu font-semibold" key={key}>
              <Author authorName={author} index={key} count={numberOfAuthors} />
            </span>
          ))
        )}
      </p>
    </div>
  );
};

export default ContributorsList;
