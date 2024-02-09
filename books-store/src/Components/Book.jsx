import React from 'react';
import './Book.css';

// Function to truncate text to a certain number of words and add line breaks
const truncateText = (text, totalWords) => {
  const words = text.split(' '); // Splitting the text into an array of words
  const lines = [];
  for (let i = 0; i < words.length; i += totalWords) {
    // Looping through the words array, incrementing by the specified number of words
    lines.push(words.slice(i, i + totalWords).join(' ')); // Pushing a line of words joined by spaces
  }
  return lines.join('<br/>'); // Joining the lines with HTML line breaks
};

// Functional component for rendering a list of books
const BooksList = ({books}) => {
  return (
    <div className="grid">
      {books.map(book => ( // Mapping through the books array to render each book
        <div key={book.id} className="items"> {/* Setting a unique key for each book */}
          <img src={book.imageLinks.thumbnail} alt={book.title} /> {/* Displaying book thumbnail */}
          <p dangerouslySetInnerHTML={{ __html: truncateText(book.title, 3) }} /> {/* Displaying truncated book title */}
          <p dangerouslySetInnerHTML={{ __html: truncateText(book.authors.join(', '), 3) }} /> {/* Displaying truncated list of authors */}
          <p id='price'>Free</p> {/* Displaying the price */}
        </div>
      ))}
    </div>
  );
};

export default BooksList; // Exporting the BooksList component for use in other files
