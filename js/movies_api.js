// API Key: 9fcd8234286e036a3d62ca757e8410cc
// Access Token: eyJhdWQiOiI5ZmNkODIzNDI4NmUwMzZhM2Q2MmNhNzU3ZTg0MTBjYyIsInN1YiI6IjY1NWM3MTkxMTA5MjMwMDBlMTQzN2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
// Link movies API: https://api.themoviedb.org/3/discover/movie
// Link Image: https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.


const api_key = '9fcd8234286e036a3d62ca757e8410cc';
const access_token = 'eyJhdWQiOiI5ZmNkODIzNDI4NmUwMzZhM2Q2MmNhNzU3ZTg0MTBjYyIsInN1YiI6IjY1NWM3MTkxMTA5MjMwMDBlMTQzN2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ';

const base_url = 'https://api.themoviedb.org/3';
const base_img = 'https://image.tmdb.org/t/p/w500';
const get_movies = '/discover/movie';

async function fetchMovies(api){
    const response = await fetch(api);
    const data = await response.json();
    print_data(data.results)
}

function print_data(movies){
    movies.map( movie => console.log(movie.original_title))
}










const api_url = `${base_url}/${get_movies}?api_key=${api_key}`;
fetchMovies(api_url)