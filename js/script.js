"use strict";
console.log("hello bro");
const numberOfFilms = parseInt(prompt('How much movies do you already wached?'));
if (isNaN(numberOfFilms)) {
    console.log('you intered not a number');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('last wached movie name'),
    b = prompt('please rate the movie'),
    c = prompt('last wached movie name'),
    d = prompt('please rate the movie');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);