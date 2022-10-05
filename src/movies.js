// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js");
console.log(allMovies);

function getAllDirectors(moviesArray) {
  const allMovies = moviesArray.map((item) => {
    return item.director;
  });
  return allMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const arrayOfScore = moviesArray.map((value) => {
    return value.score;
  });
  const sumOfScores = arrayOfScore.reduce((sum, score) => {
    return sum + score;
  }, 0);
  const finalResult = sumOfScores / moviesArray.length;
  return Number(finalResult.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .sort((a, b) => {
        if (a.year === b.year) {
             return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    }).map((movie) => {
        return movie;
    });
    
  /*   const arrayCopy = [movies];
  return arrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const firstMovieTitle = a.title.toLowerCase();
      const secondMovieTitle = b.title.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  }); */
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const sortedMovies = moviesArray.map((movies) => movies.title);
sortedMovies.sort();
return sortedMovies.slice(0,20);
  /*return movies
    .map((movie) => movie.title)
    .sort((a, b) => {
      const firstMovieTitle = a.toLowerCase();
      const secondMovieTitle = b.toLowerCase();
      if (firstMovieTitle < secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle > secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);*/
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
