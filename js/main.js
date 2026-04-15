async function loadHome() {
  const movies = await fetchTrending();
  const container = document.getElementById("content");

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${movie.title}</h3>`;
    container.appendChild(div);
  });
}

loadHome();
