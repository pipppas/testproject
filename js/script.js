"use strict";

let numberOfFilms 
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', "").trim();
        const b = prompt('На сколько оцените его?', '');
        if(a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('ERROR');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count <10){
        console.log(' мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('норм');
    } else if (personalMovieDB.count >=30) {
        console.log('11');
    }else{
        console.log('bad info');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();


