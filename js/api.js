const API_KEY = "6d63336447cff8cb583afefb1a7db203";
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * fetch trending movies
 * @returns tredning movies
 */
async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

/**
 * search for movie base on user imput
 * @param {string} query
 * @returns movies base on user input
 */
async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  const data = await res.json();
  return data.results;
}
