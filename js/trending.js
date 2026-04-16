async function loadTrending() {
  const movies = await fetchTrending();
  const container = document.getElementById("trendingContainer");

  //clear after each load
  container.innerHTML = "";

  movies.forEach((movie) => {
    const trendingMovieCard = document.createElement("div"); //similar to react card
    trendingMovieCard.classList.add("trendingMovieCard");

    trendingMovieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <p>⭐ ${movie.vote_average}/10</p>
      <p>Votes: ${movie.vote_count}</p>
    `;

    container.appendChild(trendingMovieCard);
  });
}

loadTrending();
