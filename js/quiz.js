function getRecommendation() {
    const mood = document.getElementById("mood").value;
    const snack = document.getElementById("snack").value;
    const time = document.getElementById("time").value;
    const resultNode = document.getElementById("quiz-result");

    if (mood === "" || snack === "" || time === "") {
        resultNode.innerText = "Please answer all questions to get your Snack & Stream match!";
        return;
    }

    let genre = "";
    let format = "";
    let snackMessage = "";

    if (mood === "cozy") {
        genre = "a comforting comedy, romance, or animated story";
    } else if (mood === "excited") {
        genre = "an action, adventure, or sci-fi title";
    } else if (mood === "curious") {
        genre = "a mystery, documentary, or critically acclaimed film";
    }

    if (time === "short") {
        format = "a short episode or quick watch";
    } else if (time === "medium") {
        format = "a one-hour episode or limited series";
    } else if (time === "long") {
        format = "a full movie";
    }

    if (snack === "popcorn") {
        snackMessage = "Classic popcorn energy: perfect for a theater-style pick.";
    } else if (snack === "chocolate") {
        snackMessage = "Chocolate choice: you probably want something comforting and emotional.";
    } else if (snack === "chips") {
        snackMessage = "Chips choice: something fun, fast-paced, and easy to watch fits best.";
    }

    resultNode.innerText =
        "Your match: Try " + format + " with " + genre + ". " + snackMessage;
}