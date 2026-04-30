function getRecommendation() {
  const mood = document.getElementById("mood").value;
  const resultNode = document.getElementById("quiz-result");

  let recommendation = "";

  if (mood === "cozy") {
    recommendation = "🍿 Cozy Night Pick: Try a warm comedy, romance, or animated movie.";
  } else if (mood === "excited") {
    recommendation = "🔥 Energy Pick: Try an action, adventure, or sci-fi movie.";
  } else if (mood === "sad") {
    recommendation = "🍫 Comfort Pick: Try a feel-good drama or nostalgic favorite.";
  } else if (mood === "curious") {
    recommendation = "🎬 Discovery Pick: Try a documentary, mystery, or critically acclaimed film.";
  } else {
    recommendation = "Please choose your movie-night mood first!";
  }

  resultNode.innerText = recommendation;
}