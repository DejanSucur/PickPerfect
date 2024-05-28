document.getElementById("searchButton").addEventListener("click", fetchMovie);
  
  
    // Event listener for the "Now Playing" button
    document.getElementById("nowPlayingButton").addEventListener("click", function() {
        fetchNowPlaying();
    });
  
    // Event listener for the "Top Rated" button
    document.getElementById("topRatedButton").addEventListener("click", function() {
        fetchTopRated();
    });