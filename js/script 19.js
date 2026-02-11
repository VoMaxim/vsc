"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?"),
  b = prompt("Один из последних просмотренных фильмов?"),
  c = prompt("На сколько оцените его?"),
  d = prompt("На сколько оцените его?)");

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;

console.log(personalMovieDB);