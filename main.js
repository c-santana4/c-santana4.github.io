import { baseURL, IMG_URL } from './api.js';

import { showRandomMovie, getId } from './functions.js'

  window.showMovie = function showMovie() {
    let id = getId();

    let BASE_URL = baseURL(id);

    fetch(BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let statusCode = data.status_code;
      let title = data.title;
      let poster = data.poster_path;
      let description = data.overview;

      let poster_url = IMG_URL + poster;

      console.log(data);
      
      showRandomMovie(poster_url, title, description);
    })

    .catch(function(error) {
      console.log(error);
    });
  }