// Function to fetch data from the "Now Playing" endpoint and display in results div
function fetchNowPlaying() {
    let resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = "";

    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((response) => {
            response.results.forEach((movie) => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');

                const title = document.createElement('h2');
                title.textContent = movie.title;

                // Create an image element for the poster
                const posterImage = document.createElement('img');
                posterImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                posterImage.alt = movie.title; // Use the movie title as alt text for accessibility

                const releaseDate = document.createElement('p');
                releaseDate.textContent = "Date of Release: " + movie.release_date;

                const overview = document.createElement('p');
                overview.textContent = movie.overview;

                movieDiv.appendChild(posterImage);
                movieDiv.appendChild(title);
                movieDiv.appendChild(releaseDate);
                movieDiv.appendChild(overview);

                resultsDiv.prepend(movieDiv);
            });
        })
        .catch((err) => console.error(err));
}

// Function to fetch data from the "Top Rated" endpoint and display in results div
function fetchTopRated() {
    let resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = "";

    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((response) => {
            response.results.forEach((movie) => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');

                const title = document.createElement('h2');
                title.textContent = movie.title;

                // Create an image element for the poster
                const posterImage = document.createElement('img');
              if (movie.poster_path) {
                  posterImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
              } else {
                  posterImage.src = 'placeholder_image_url.jpg'; // You can use a placeholder image URL if the movie doesn't have a poster
              }
              posterImage.alt = movie.title; // Use the movie title as alt text for accessibility

                const releaseDate = document.createElement('p');
                releaseDate.textContent = "Date of Release: " + movie.release_date;

                const overview = document.createElement('p');
                overview.textContent = movie.overview;

                movieDiv.appendChild(posterImage);
                movieDiv.appendChild(title);
                movieDiv.appendChild(releaseDate);
                movieDiv.appendChild(overview);

                resultsDiv.prepend(movieDiv);
            });
        })
        .catch((err) => console.error(err));
}