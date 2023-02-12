import axios from 'axios';
// make a request for a user with a given id.
const Axios = axios.create({ baseURL: process.env.REACT_APP_API_URL });


// To get Data

// To get Data
async function fetchTodos () {
    try {
      const response = await Axios.get('api/customer');  
      console.log(response.data);
      return response.data; 
    }
    catch{
      
    }
  }


  export {Axios, fetchTodos};