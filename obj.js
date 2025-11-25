const movieLibrary = {
  movies: [],

  addMovie(movie) {
    this.movies.push(movie);
  },
  removeMovieById(id) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  },
  findMovieByTitle(title) {
    return this.movies.find((movie) => movie.title === title) || null;
  },
  getMoviesByGenre(genre) {
    return this.movies.filter((movie) => movie.genres.includes(genre));
  },
  markAsWatched(id) {
    const movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      movie.watched = true;
    }
  },
  unwatched() {
    return this.movies.filter((movie) => !movie.watched);
  },

  updateRating(id, newRating) {
    const movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      movie.rating = newRating;
    }
  },

  getStatistics() {
    return {
      totalMovies: this.movies.length,
      watchedMovies: this.movies.filter((movie) => movie.watched).length,
      unwatchedCount: this.unwatched().length,
      avgRating:
        this.movies.reduce((sum, movie) => sum + movie.rating, 0) /
          this.movies.length || 0,
      oldestYear: Math.min(...this.movies.map((movie) => movie.year)),
      newesYear: Math.max(...this.movies.map((movie) => movie.year)),
    };
  },
};

const movie1 = {
  id: Symbol(2),
  title: "Robinson Crusoe",
  year: 1719,
  genres: ["Adventure novel", "Travel literature", "Survival fiction"],
  rating: 10,
  watched: true
};

const movie2 = {
  id: Symbol(3),
  title: "The Hobbit",
  year: 1937,
  genres: ["Fantasy", "Adventure"],
  rating: 9,
  watched: false
};

const movie3 = {
  id: Symbol(4),
  title: "1984",
  year: 1949,
  genres: ["Dystopian", "Political fiction", "Social science fiction"],
  rating: 8,
  watched: true
};

const movie4 = {
  id: Symbol(5),
  title: "To kill a Mockingbird",
  year: 1960,
  genres: ["Southern Gothic", "Bildungsroman"],
  rating: 9,
  watched: false
};

const movie5 = {
  id: Symbol(6),
  title: "Pride and  Prejudice",
  year: 1813,
  genres: ["Romance novel", "Satire"],
  rating: 8,
  watched: true
};

[movie1, movie2, movie3, movie4, movie5].forEach((movie) =>
  movieLibrary.addMovie(movie));
movieLibrary.removeMovieById(movie2.id);
console.log(movieLibrary.getStatistics());

movieLibrary.updateRating(movie3.id, 10);

console.log(movieLibrary.findMovieByTitle("1984"));

console.log(movieLibrary.getMoviesByGenre("Adventure"));
