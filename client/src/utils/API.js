import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyB4UgvugNw8YIYEZ25vOrlrs-ndCv4Tfds";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
