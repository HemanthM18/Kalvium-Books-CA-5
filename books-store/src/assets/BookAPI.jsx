import axios from 'axios';

const api = 'https://reactnd-books-api.udacity.com/books';
export const fetch = async () => {
  try{
    const response = await axios.get(api, {
      headers: { 'Authorization': 'whatever-you-want' }
    });
    return response.data.books;
  } 
  
  catch(error){
    console.error('Error fetching books:', error);
    throw error;
  }
};