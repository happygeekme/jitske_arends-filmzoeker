const selectedMoviesList = document.querySelector("#selectedMovies");

addMoviesToDom(movies);

function addMoviesToDom(films) {
  films.map((movie) => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const poster = document.createElement("img");
    const imdbID = movie.imdbID;
    const href = CreateImdbLink(imdbID);
    newA.href = href;
    newA.target = "_blank";
    poster.src = movie.Poster;
    newA.appendChild(poster);
    newLi.appendChild(newA);
    selectedMoviesList.appendChild(newLi);
  });
}

const filterButtons = document.querySelectorAll('[name = "filter"]');

filterButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", handleOnChangeEvent);
});

function handleOnChangeEvent(event) {
  const value = event.target.value.toLowerCase();
  switch (value) {
    case "newest":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("avengers");
      break;
    case "xmen":
      filterMovies("x-men");
      break;
    case "princess":
      filterMovies("princess");
      break;
    case "batman":
      filterMovies("batman");
      break;
  }
}
const searchBar = document.querySelector("#search");
const result = document.querySelector("#result");

const inputhandler = function (input) {
  const value = (result.innerHTML = input.target.value);
  filterMovies(value);
};

searchBar.addEventListener("input", inputhandler);

function filterMovies(value) {
  selectedMoviesList.innerHTML = "";
  movies.filter((movie) => {
    const filtered = [];
    if (movie.Title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
      filtered.push(movie);
      addMoviesToDom(filtered);
    }
  });
}

function filterLatestMovies() {
  selectedMoviesList.innerHTML = "";
  const newest = movies.filter((movie) => parseInt(movie.Year) >= 2014);
  addMoviesToDom(newest);
}

function CreateImdbLink(imdbID) {
  return "https://www.imdb.com/title/" + imdbID;
}
