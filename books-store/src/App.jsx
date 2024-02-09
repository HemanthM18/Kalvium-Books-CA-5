import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './Components/Book';
import Register from './Components/RegisterForm';
import './App.css';
import Navbar from './assets/Navbar';

const App = () => {
  // State variables to manage books data and filtered books data
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetching books data from an API endpoint on component mount
  useEffect(() => {
    fetch('https://reactnd-books-api.udacity.com/books', {
      headers: { 'Authorization': 'react-api-books' }
    })
      .then(response => response.json())
      .then(data => {
        setBooks(data.books); // Setting the fetched books data
        setFilteredBooks(data.books); // Setting the filtered books data initially same as fetched books
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to filter books based on search text
  const handleSearch = (searchText) => {
    const filtered = books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredBooks(filtered); // Updating filtered books state
  };

  // Function to handle successful registration
  const handleSuccessfulRegistration = () => {
    window.location.href = '/'; // Redirecting to home page after successful registration
  };

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Search input for filtering books */}
      <div className="search">
        <input type="text" placeholder="Search for books..." onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <Routes>
        {/* Route for displaying home page with filtered books */}
        <Route
          path="/"
          element={<Home books={filteredBooks} />}
        />
        {/* Route for displaying registration form */}
        <Route
          path="/register"
          element={<Register onSuccessfulRegistration={handleSuccessfulRegistration} />}
        />
      </Routes>
    </div>
  );
};

// Home component to display list of books
const Home = ({ books }) => {
  return (
    <div className="books-container">
      {/* Rendering BooksList component with filtered books */}
      <BooksList books={books} />
    </div>
  );
};

export default App;
