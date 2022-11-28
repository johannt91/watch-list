export async function getMovieList(title) {
    const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c6fa887d55ed0c435c379f9d37a93292&query=${title}`
    ).then((res)=>res.json())
    return data.results
}

// API for anime
// https://api.themoviedb.org/3/discover/movie?api_key=c6fa887d55ed0c435c379f9d37a93292&language=en-US&page=1&with_genres=16&with_keywords=210024|287501