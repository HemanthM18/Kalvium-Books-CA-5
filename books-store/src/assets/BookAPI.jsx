import axios from 'axios';

const api = 'https://reactnd-books-api.udacity.com/books';

export const fetch = async () => {
  try {
    // Making a GET request to the API endpoint
    const response = await axios.get(api, {
      headers: { 'Authorization': 'whatever-you-want' } // Adding Authorization header
    });
    
    // Returning the books data from the response
    return response.data.books;
  } catch(error) {
    // Handling errors
    console.error('Error fetching books:', error);
    throw error; // Throwing the error for handling it at the calling site
  }
};
