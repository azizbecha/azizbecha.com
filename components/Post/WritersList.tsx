import React from 'react';
import { FaPenToSquare } from 'react-icons/fa6';

interface Props {
  writers: string[];
}

interface WriterProps {
  index: number,
  count: number,
  name: string
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

const Author: React.FC<WriterProps> = ({ index, name: authorName, count }) => {
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

const WritersList: React.FC<Props> = ({ writers: writers }) => {
  const Writers = () => {
    const numberOfAuthors = writers.length;
    return (
      <>
        {numberOfAuthors === 1 ? (
          <span className="font-ubuntu font-semibold">{writers[0]}</span>
        ) : (
          writers.map((author, key) => (
            <span className="font-ubuntu font-semibold" key={key}>
              <Author name={author} index={key} count={numberOfAuthors} />
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
          <Writers />
        </span>
      </div>
    </div>
  );
};

export default WritersList;
