async function getRecommendation() {
    const mood = document.getElementById("mood").value;
    const snack = document.getElementById("snack").value;
    const time = document.getElementById("time").value;
    const resultNode = document.getElementById("quiz-result");

    if (mood === "" || snack === "" || time === "") {
        resultNode.innerHTML = "<p>Please answer all questions to get your Snack & Stream match!</p>";
        return;
    }

    let query = "";

    if (mood === "cozy") {
        query = "comedy";
    } else if (mood === "excited") {
        query = "action";
    } else if (mood === "curious") {
        query = "mystery";
    } else {
        query = "movie";
    }

    const movies = await searchMovies(query);

    if (movies.length === 0) {
        resultNode.innerHTML = "<p>No movie found. Please try again!</p>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];

    resultNode.innerHTML = `
        <div class="quiz-movie-card">
            <h2>Your Snack & Stream Match</h2>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>⭐ ${movie.vote_average}/10</p>
        </div>
    `;
}