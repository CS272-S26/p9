async function loadTrending() {
  const movies = await fetchTrending();
  const container = document.getElementById("trendingContainer");

  container.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("trending-card");

    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : "../assets/placeholderImg.gif";

    card.innerHTML = `
      <img 
        src="${poster}" 
        class="trending-poster"
        alt="${movie.title}"
      >

      <div class="trending-content">
        <h3 class="trending-title">${movie.title}</h3>

        <div class="trending-meta">
          <span>⭐ ${movie.vote_average.toFixed(1)}</span>
          <span>Votes: ${movie.vote_count}</span>
        </div>

        <p class="trending-description">
          ${movie.overview ? movie.overview : "No description available."}
        </p>
      </div>
    `;

    container.appendChild(card);
  });
}

loadTrending();
