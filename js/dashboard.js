const savedMoviesContainer = document.getElementById("savedMoviesContainer");

/**
 * Load saved moveis from local storage and display them on dashboard
 *
 */
function loadSavedMovies() {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

  savedMoviesContainer.innerHTML = "";

  if (savedMovies.length === 0) {
    savedMoviesContainer.innerHTML =
      "<p class='text-white'>No saved movies yet.</p>";
    return;
  }

  savedMovies.forEach((movie) => {
    const card = document.createElement("div");

    //use place holder image if no poster image provided
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : "../assets/placeholderImg.gif";

    card.innerHTML = `
      <div class="card h-100">
        <img 
          src="${poster}" 
          onerror="this.src='../assets/placeholderImg.gif'"
          class="card-img-top"
          alt="${movie.title}"
        >

        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>

          <p class="card-text text-white">
            ⭐ ${movie.vote_average}/10
          </p>

          <button class="remove-btn" data-id="${movie.id}">
            Remove
          </button>
        </div>
      </div>
    `;

    savedMoviesContainer.appendChild(card);
  });

  addRemoveButtons();
}

/**
 * When user click the remove button, the move is removed from local storage and ui is updated
 */
function addRemoveButtons() {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const movieId = Number(button.dataset.id); //get movie id

      //retireve current saved movie
      let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

      //remove the movie
      savedMovies = savedMovies.filter((movie) => movie.id !== movieId);

      //update local storage
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));

      loadSavedMovies(); //update ui
    });
  });
}

loadSavedMovies();
