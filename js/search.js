const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("searchResults");
const title = document.getElementById("resultsTitle");
const count = document.getElementById("resultsCount");
const form = document.getElementById("searchForm");

// prevent page refresh
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

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

// Load trending
async function loadAllContent() {
  const movies = await fetchTrending();
  displayMovies(movies);
}

// Display movies
function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  const savedMovies = getSavedMovies();

  movies.forEach((movie) => {
    const col = document.createElement("div");

    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : "../assets/placeholderImg.gif";

    const isSaved = savedMovies.some((m) => m.id === movie.id);

    col.innerHTML = `
      <div class="card h-100 position-relative">
        <img 
          src="${poster}" 
          class="card-img-top"
          alt="${movie.title}"
        >
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>

          <p class="card-text text-white">
            ⭐ ${movie.vote_average}/10
          </p>
            <button class="save-btn ${isSaved ? "saved" : ""}">
          ${isSaved ? "Saved" : "Save"}
        </button>
        </div>
      </div>
    `;

    const saveBtn = col.querySelector(".save-btn");

    saveBtn.addEventListener("click", () => {
      saveBtn.classList.toggle("saved");

      if (saveBtn.classList.contains("saved")) {
        saveBtn.textContent = "Saved";
        saveMovie(movie);
      } else {
        saveBtn.textContent = "Save";
        removeMovie(movie.id);
      }
    });

    resultsContainer.appendChild(col);
  });

  count.textContent = `${movies.length} results`;
}

function getSavedMovies() {
  return JSON.parse(localStorage.getItem("savedMovies")) || [];
}

function saveMovie(movie) {
  let savedMovies = getSavedMovies();

  const alreadySaved = savedMovies.some((m) => m.id === movie.id);

  if (!alreadySaved) {
    savedMovies.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }
}

function removeMovie(id) {
  let savedMovies = getSavedMovies();

  savedMovies = savedMovies.filter((movie) => movie.id !== id);

  localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
}
