const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTExNTA4ZDNkMGNkNDc3ZWIwNDg5MTBlNmE3NzUxYyIsIm5iZiI6MTcyMTc5NTUxMy4xNDk0NjcsInN1YiI6IjY2YTA4MmY2OGU3NTk2YjdjN2JmNWU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BBryMiwpBMvqiuStfXbUDt-qoIe6NK84dM6RYKc6WDY'
    }
};

let movieList = [];
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
        const jsonString = JSON.stringify(data);
        const movieLength = data.results.length;
        for (let i = 0; i < movieLength; i++) {
            let movie = {
                id: data.results[i].id,
                title: data.results[i].title,
                overview: data.results[i].overview,
                poster_path: `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`,
                vote_average: data.results[i].vote_average
            };
            movieList.push(movie);
        }
        viewMovieList(movieList);

    })
    .catch(err => console.error(err));

function viewMovieList(movies) {
    console.log("movies:" + movies)
    const movieContainer = document.getElementById("movieCard");
    movieContainer.innerHTML = "";

    // for (let i = 0; i < movies.length; i++) {
    //     let movieCard = document.createElement(`div`);
    //     movieCard.classList.add(`col`);
    //     movieCard.onclick = () => clickMovieCard(movies[i]);
    //     movieCard.innerHTML = `<div class="card h-100">
    //       <img
    //         src="${movies[i].poster_path}"
    //         alt="..."
    //       />
    //       <div class="card-body">
    //         <h5 class="card-title">${movies[i].title}</h5>
    //         <p class="card-text">${movies[i].overview}</p>
    //         <p class="card-text">Rating: ${movies[i].vote_average}</p>
    //       </div>
    //     </div>
    //   </div>`;
    //     movieContainer.appendChild(movieCard);
    // }

    movies.forEach(movie => {
        let movieCard = document.createElement(`div`);
        movieCard.classList.add(`col`);
        movieCard.onclick = () => clickMovieCard(movie);
        movieCard.innerHTML = `<div class="card h-100">
          <img src="${movie.poster_path}"/>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview}</p>
            <p class="card-text">Rating: ${movie.vote_average}</p>
          </div>
        </div>
      </div>`;
        movieContainer.appendChild(movieCard);
    });
}

function clickMovieCard(selectMovie) {
    // console.log("selectMovie:" + selectMovie)
    const selectMovieId = selectMovie.id;
    console.log("selectMovieId:" + selectMovieId);
    alert("영화 ID: " + selectMovieId);
}


window.enterSearch = function enterSearch(event) {
    if (event.keyCode === 13) {
        const searchValue = document.getElementById("searchMovie").value;
        // console.log("searchValue"+searchValue)
        searchMovieName(searchValue);
    }
}

window.clickSearchButton = function clickSearchButton() {
    const searchValue = document.getElementById("searchMovie").value;
    // console.log("searchValue"+searchValue);
    searchMovieName(searchValue);

}

function searchMovieName(searchValue) {
    console.log("searchValue:" + searchValue);
    const serachMovies = movieList.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()));
    console.log("serachMovies:" + serachMovies);
    viewMovieList(serachMovies);
}

window.onload = function () {
    document.getElementById("searchMovie").focus();
}