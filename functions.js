export function getId() {
    let id = Math.floor(Math.random() * 1001);
    return id;
}

export function showRandomMovie(cover, title, description) {
    document.getElementById("movie").style.display = "flex";

    document.getElementById("movieCover").innerHTML = `<img src="${cover}" alt="${title} cover">`;
    document.getElementById("movieTitle").innerHTML = title;
    document.getElementById("movieDescription").innerHTML = description;
}