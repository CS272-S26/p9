const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("searchResults");
const title = document.getElementById("searchTitle");

// Load trending by default
loadAllContent();

input.addEventListener("input", async () => {
  const query = input.value.trim();

  if (query === "") {
    title.textContent = "All Content";
    loadAllContent();
    return;
  }

  title.textContent = `Showing results for "${query}"`;

  const movies = await searchMovies(query);
  displayMovies(movies);
});

// Load trending as default
async function loadAllContent() {
  const movies = await fetchTrending();
  displayMovies(movies);
}

// Display function
function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

    col.innerHTML = `
      <div class="card h-100">
        <img 
          src="https://image.tmdb.org/t/p/w200${movie.poster_path}" 
          class="card-img-top"
          alt="${movie.title}"
        >
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            ⭐ ${movie.vote_average}/10
          </p>
        </div>
      </div>
    `;

    resultsContainer.appendChild(col);
  });
}
