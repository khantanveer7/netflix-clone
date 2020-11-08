import axios from 'axios';

// base url to make req to the movies  DB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;