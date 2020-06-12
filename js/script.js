"use strict";
const numberOfFilms = parseInt(prompt('How much movies do you already wached?'));
if (isNaN(numberOfFilms)) {
    console.log('intered not numbers');
}   else if (numberOfFilms <= 10) {
        console.log('why so small?');
    }
else if ((numberOfFilms > 10) && (numberOfFilms <= 30)) {
        console.log('you are good wiever');
    }
else {console.log('very good expert in films!');
    }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
Array = ['last wached movie name', 'please rate the movie'];
    for (let i = 0; i < 2; i++) {
        let z = prompt(Array[0]);
        let x = prompt(Array[1]);
        if ((z != '') && (z != null) && (z.length < 50) && (x != '') && (x != null)) {
            personalMovieDB.movies[z] = x;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
console.log(personalMovieDB);