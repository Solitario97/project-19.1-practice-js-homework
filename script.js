/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/



let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
   /*  */

    /* let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', ''); */

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */
/* console.log(personalMovieDB); */




/* 2 */
    for (let i = 0, i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        personalMovieDB.movies[a] = b;
    }
    console.log(personalMovieDB);
    
/*     if (personalMovieDB == '') {
        prompt(personalMovieDB);
    } else if (personalMovieDB == false) {
        prompt(personalMovieDB);
    } else if (personalMovieDB == personalMovieDB.length > 50) {
        prompt(personalMovieDB);
    } */


  /*   if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && < 30) {
        alert ("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else () {
        alert("Произошла ошибка");
    } */