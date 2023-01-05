/* An API that handles requests from "TheMoviedb.com" 
it gets movies, genres, and what not
*/

const tmdbKey = "8fb552dd1c4e43f8d7448372de830709";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
// const playBtn = document.getElementById('playBtn');

// request/Get genres
const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      //   console.log(genres);
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

// request or get movies
const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};
