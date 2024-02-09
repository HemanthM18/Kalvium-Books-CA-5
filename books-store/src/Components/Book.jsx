import React from 'react';
import './Book.css';

const truncateText = (text, totalWords) => {
  const word = text.split(' ');
  const line = [];
  for (let i = 0; i < word.length; i += totalWords) {
    line.push(word.slice(i, i + totalWords).join(' '));
  }
  return line.join('<br/>');
};

const BooksList = ({books}) => {
  return (
    <div className="grid">
      {books.map(book => (
        <div key={book.id} className="items">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p dangerouslySetInnerHTML={{ __html: truncateText(book.title, 3) }} />
          <p dangerouslySetInnerHTML={{ __html: truncateText(book.authors.join(', '), 3) }} />
          <p id='price'>Free</p>
        </div>
      ))}
    </div>
  );
};

export default BooksList;