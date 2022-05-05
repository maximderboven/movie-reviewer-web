export class Movie {
    constructor(
        movieId, comingSoon, title, released, runtime, type, plot, poster
    ) {
        this.movieId = movieId
        this.comingSoon = comingSoon
        this.title = title
        this.released = released;
        this.runtime = runtime;
        this.type = type;
        this.plot = plot;
        this.poster = poster;
    }
}